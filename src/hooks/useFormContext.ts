import { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import type { FormContextValue } from '../types/form.types';

export const useFormContext = (): FormContextValue => {
  const context = useContext(FormContext);
  
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  
  return context;
};
