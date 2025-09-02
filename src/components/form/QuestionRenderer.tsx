import React from 'react';
import { useFormContext } from '../../hooks/useFormContext';
import type { Question, FormState, FormContextValue } from '../../types/form.types';

const renderTextQuestion = (question: Question, state: FormState, updateAnswer: FormContextValue['updateAnswer']) => {
  const currentAnswer = state.answers[question.id] || '';
  const error = state.errors[question.id];

  return (
    <div className="space-y-3">
      <label className="block">
        <span className="text-lg font-semibold text-gray-800">
          {question.text}
          {question.required && <span className="text-purple-500 ml-1">*</span>}
        </span>
      </label>
      
      <input
        id={question.id}
        type="text"
        value={currentAnswer}
        onChange={(e) => updateAnswer(question.id, e.target.value)}
        placeholder={question.placeholder || ''}
        className={`w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all duration-200 bg-white ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
        required={question.required}
        aria-invalid={!!error}
        aria-required={question.required}
        aria-describedby={error ? `${question.id}-error` : undefined}
      />
      
      {error && (
        <div id={`${question.id}-error`} role="alert" className="flex items-center space-x-2 text-red-500 text-sm">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

const renderSimpleRadioQuestion = (question: Question, state: FormState, updateAnswer: FormContextValue['updateAnswer']) => {
  const currentAnswer = state.answers[question.id] || '';
  const error = state.errors[question.id];

  if (!question.options) return null;

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="text-lg font-semibold text-gray-800">
          {question.text}
          {question.required && <span className="text-purple-500 ml-1">*</span>}
        </span>
      </label>
      
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const optionValue = option.value || option.id;
          const isSelected = currentAnswer === optionValue;
          
          return (
            <label
              key={option.id}
              className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <input
                id={index === 0 ? question.id : undefined}
                type="radio"
                name={question.id}
                value={optionValue}
                checked={isSelected}
                onChange={(e) => updateAnswer(question.id, e.target.value)}
                className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                required={question.required}
                aria-invalid={!!error}
                aria-required={question.required}
                aria-describedby={error ? `${question.id}-error` : undefined}
              />
              <span className="text-gray-800 font-medium">{option.label}</span>
            </label>
          );
        })}
      </div>
      
      {error && (
        <div id={`${question.id}-error`} role="alert" className="flex items-center space-x-2 text-red-500 text-sm">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

const renderRadioQuestion = (question: Question, state: FormState, updateAnswer: FormContextValue['updateAnswer']) => {
  const currentAnswer = state.answers[question.id] || '';
  const error = state.errors[question.id];

  if (!question.options) return null;

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="text-lg font-semibold text-gray-800">
          {question.text}
          {question.required && <span className="text-purple-500 ml-1">*</span>}
        </span>
      </label>
      
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const optionValue = option.value || option.id;
          const isSelected = currentAnswer === optionValue;
          
          return (
            <label
              key={option.id}
              className={`w-full p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 relative ${
                isSelected 
                  ? 'border-purple-500 bg-purple-50 shadow-md' 
                  : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
              }`}
            >
              <input
                id={index === 0 ? question.id : undefined}
                type="radio"
                name={question.id}
                value={optionValue}
                checked={isSelected}
                onChange={(e) => updateAnswer(question.id, e.target.value)}
                className="sr-only"
                required={question.required}
                aria-invalid={!!error}
                aria-required={question.required}
                aria-describedby={error ? `${question.id}-error` : undefined}
              />
              
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-medium text-base">{option.label}</span>
                
                {isSelected && (
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </label>
          );
        })}
      </div>
      
      {error && (
        <div id={`${question.id}-error`} role="alert" className="flex items-center space-x-2 text-red-500 text-sm">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

const renderCheckboxQuestion = (question: Question, state: FormState, updateAnswer: FormContextValue['updateAnswer']) => {
  const currentAnswer = (state.answers[question.id] as string[]) || [];
  const error = state.errors[question.id];

  if (!question.options) return null;

  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    let newAnswer: string[];
    
    if (checked) {
      newAnswer = [...currentAnswer, optionValue];
    } else {
      newAnswer = currentAnswer.filter(value => value !== optionValue);
    }
    
    updateAnswer(question.id, newAnswer);
  };

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="text-lg font-semibold text-gray-800">
          {question.text}
          {question.required && <span className="text-purple-500 ml-1">*</span>}
        </span>
      </label>
      
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const optionValue = option.value || option.id;
          const isSelected = currentAnswer.includes(optionValue);
          
          return (
            <label
              key={option.id}
              className={`w-full p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                isSelected 
                  ? 'border-purple-500 bg-purple-50 shadow-md' 
                  : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
              }`}
            >
              <input
                id={index === 0 ? question.id : undefined}
                type="checkbox"
                value={optionValue}
                checked={isSelected}
                onChange={(e) => handleCheckboxChange(optionValue, e.target.checked)}
                className="sr-only"
                aria-invalid={!!error}
                aria-required={question.required}
                aria-describedby={error ? `${question.id}-error` : undefined}
              />
              
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-medium text-base">{option.label}</span>
                
                {isSelected && (
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </label>
          );
        })}
      </div>
      
      {error && (
        <div id={`${question.id}-error`} role="alert" className="flex items-center space-x-2 text-red-500 text-sm">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export const QuestionRenderer: React.FC<{ question: Question }> = ({ question }) => {
  const { state, updateAnswer } = useFormContext();
  
  if (question.type === 'radio' && (
    question.id === 'personal_gender' || 
    question.id === 'personal_looking_for' ||
    question.id === 'location_long_distance' ||
    question.id === 'lifestyle_living_situation' ||
    question.id === 'values_religion_importance' ||
    question.id === 'values_ideal_weekend' ||
    question.id === 'communication_conflict_handling' ||
    question.id === 'communication_style' ||
    question.id === 'communication_affection_style' ||
    question.id === 'goals_relationship_type' ||
    question.id === 'goals_marriage_timeline' ||
    question.id === 'goals_children' ||
    question.id === 'preferences_education_level' ||
    question.id === 'preferences_career_ambition'
  )) {
    return renderSimpleRadioQuestion(question, state, updateAnswer);
  }

  switch (question.type) {
    case 'text':
      return renderTextQuestion(question, state, updateAnswer);
    case 'radio':
      return renderRadioQuestion(question, state, updateAnswer);
    case 'checkbox':
      return renderCheckboxQuestion(question, state, updateAnswer);
    default:
      return (
        <div className="text-red-500">
          Unknown question type: {question.type}
        </div>
      );
  }
};
