export type QuestionType = 'text' | 'radio' | 'checkbox';

export interface QuestionOption {
  id: string;
  label: string;
  value?: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  required: boolean;
  options?: QuestionOption[];
  placeholder?: string;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    errorMessage?: string;
  };
}

export interface Screen {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

export interface Chapter {
  id: string;
  title: string;
  description?: string;
  screens: Screen[];
}

export interface FormConfiguration {
  title: string;
  description?: string;
  chapters: Chapter[];
}

export interface FormAnswers {
  [questionId: string]: string | string[] | undefined;
}

export interface ValidationErrors {
  [questionId: string]: string;
}

export interface FormState {
  currentChapterIndex: number;
  currentScreenIndex: number;
  answers: FormAnswers;
  errors: ValidationErrors;
  isSubmitted: boolean;
}

export interface FormContextValue {
  state: FormState;
  updateAnswer: (questionId: string, answer: string | string[]) => void;
  nextScreen: () => string | null;
  previousScreen: () => void;
  validateCurrentScreen: () => { isValid: boolean; firstInvalidFieldId: string | null };
  submitForm: () => string | null;
  isCurrentScreenValid: () => boolean;
  getCurrentScreen: () => Screen | null;
  getCurrentChapter: () => Chapter | null;
  getProgressPercentage: () => number;
}
