import type { Question, ValidationErrors } from '../types/form.types';

export const validateQuestion = (
  question: Question,
  answer: string | string[] | undefined
): string | undefined => {
  if (question.required) {
    if (!answer || 
        (Array.isArray(answer) && answer.length === 0) || 
        (typeof answer === 'string' && answer.trim() === '')) {
      return `${question.text} is required`;
    }
  }

  if (!answer || 
      (Array.isArray(answer) && answer.length === 0) || 
      (typeof answer === 'string' && answer.trim() === '')) {
    return undefined;
  }

  switch (question.type) {
    case 'text':
      return validateTextQuestion(question, answer as string);
    case 'radio':
      return validateRadioQuestion(question, answer as string);
    case 'checkbox':
      return validateCheckboxQuestion(question, answer as string[]);
    default:
      return undefined;
  }
};

const validateTextQuestion = (question: Question, answer: string): string | undefined => {
  const { validation } = question;
  if (!validation) return undefined;

  if (validation.minLength && answer.length < validation.minLength) {
    return validation.errorMessage || `${question.text} must be at least ${validation.minLength} characters long`;
  }

  if (validation.maxLength && answer.length > validation.maxLength) {
    return validation.errorMessage || `${question.text} must be no more than ${validation.maxLength} characters long`;
  }

  if (validation.pattern) {
    const regex = new RegExp(validation.pattern);
    if (!regex.test(answer)) {
      return validation.errorMessage || `${question.text} format is invalid`;
    }
  }

  return undefined;
};

const validateRadioQuestion = (question: Question, answer: string): string | undefined => {
  if (question.options && !question.options.some(option => option.value === answer || option.id === answer)) {
    return `Please select a valid option for ${question.text}`;
  }

  return undefined;
};

const validateCheckboxQuestion = (question: Question, answers: string[]): string | undefined => {
  if (question.required && (!answers || answers.length === 0)) {
    return `Please select at least one option for ${question.text}`;
  }

  if (question.options && answers && answers.length > 0) {
    const validOptions = question.options.map(option => option.value || option.id);
    const invalidSelections = answers.filter(answer => !validOptions.includes(answer));
    
    if (invalidSelections.length > 0) {
      return `Please select valid options for ${question.text}`;
    }
  }

  return undefined;
};

export const validateScreen = (
  questions: Question[],
  answers: { [questionId: string]: string | string[] | undefined }
): ValidationErrors => {
  const errors: ValidationErrors = {};

  questions.forEach(question => {
    const error = validateQuestion(question, answers[question.id]);
    if (error) {
      errors[question.id] = error;
    }
  });

  return errors;
};

export const validateScreenWithFirstError = (
  questions: Question[],
  answers: { [questionId: string]: string | string[] | undefined }
): { errors: ValidationErrors; firstInvalidFieldId: string | null } => {
  const errors: ValidationErrors = {};
  let firstInvalidFieldId: string | null = null;

  questions.forEach(question => {
    const error = validateQuestion(question, answers[question.id]);
    if (error) {
      errors[question.id] = error;
      if (!firstInvalidFieldId) {
        firstInvalidFieldId = question.id;
      }
    }
  });

  return { errors, firstInvalidFieldId };
};

export const isScreenValid = (
  questions: Question[],
  answers: { [questionId: string]: string | string[] | undefined }
): boolean => {
  const errors = validateScreen(questions, answers);
  return Object.keys(errors).length === 0;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-()]/g, ''));
};
