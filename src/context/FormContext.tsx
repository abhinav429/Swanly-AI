import React, { createContext } from 'react';
import type { ReactNode } from 'react';
import type { FormContextValue } from '../types/form.types';

const FormContext = createContext<FormContextValue | undefined>(undefined);

interface FormProviderProps {
  value: FormContextValue;
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ value, children }) => {
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext };
