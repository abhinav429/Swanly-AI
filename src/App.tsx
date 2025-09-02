import { FormProvider } from './context/FormContext';
import { FormContainer } from './components/form/FormContainer';
import { useFormState } from './hooks/useFormState';
import { FORM_CONFIGURATION } from './config/formConfiguration';

function App() {
  const formState = useFormState(FORM_CONFIGURATION);

  return (
    <FormProvider value={formState}>
      <FormContainer />
    </FormProvider>
  );
}

export default App;
