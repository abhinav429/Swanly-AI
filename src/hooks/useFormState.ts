import { useState, useCallback } from 'react';
import type { FormConfiguration, FormState, ValidationErrors, Screen, Chapter } from '../types/form.types';
import { validateScreen, validateScreenWithFirstError, isScreenValid } from '../utils/validation.utils';

export const useFormState = (configuration: FormConfiguration) => {
  const [state, setState] = useState<FormState>({
    currentChapterIndex: 0,
    currentScreenIndex: 0,
    answers: {},
    errors: {},
    isSubmitted: false
  });

  const updateAnswer = useCallback((questionId: string, answer: string | string[]) => {
    // Update answer and clear existing error for this field.
    setState(prevState => ({
      ...prevState,
      answers: {
        ...prevState.answers,
        [questionId]: answer
      },
      errors: {
        ...prevState.errors,
        [questionId]: undefined
      } as ValidationErrors
    }));
  }, []);

  const getCurrentScreen = useCallback((): Screen | null => {
    const currentChapter = configuration.chapters[state.currentChapterIndex];
    if (!currentChapter) return null;
    
    return currentChapter.screens[state.currentScreenIndex] || null;
  }, [configuration, state.currentChapterIndex, state.currentScreenIndex]);

  const getCurrentChapter = useCallback((): Chapter | null => {
    return configuration.chapters[state.currentChapterIndex] || null;
  }, [configuration, state.currentChapterIndex]);

  const validateCurrentScreen = useCallback((): { isValid: boolean; firstInvalidFieldId: string | null } => {
    const currentScreen = getCurrentScreen();
    if (!currentScreen) return { isValid: false, firstInvalidFieldId: null };

    const { errors: screenErrors, firstInvalidFieldId } = validateScreenWithFirstError(currentScreen.questions, state.answers);
    
    setState(prevState => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        ...screenErrors
      }
    }));

    return { isValid: Object.keys(screenErrors).length === 0, firstInvalidFieldId };
  }, [getCurrentScreen, state.answers]);

  const isCurrentScreenValid = useCallback((): boolean => {
    const currentScreen = getCurrentScreen();
    if (!currentScreen) return false;

    return isScreenValid(currentScreen.questions, state.answers);
  }, [getCurrentScreen, state.answers]);

  // Intentionally no automatic validation here; we validate only on navigation.

  const nextScreen = useCallback((): string | null => {
    const currentScreen = getCurrentScreen();
    if (!currentScreen) return null;

    const validation = validateCurrentScreen();
    if (!validation.isValid) {
      return validation.firstInvalidFieldId;
    }

    setState(prevState => {
      const currentChapter = configuration.chapters[prevState.currentChapterIndex];
      if (!currentChapter) return prevState;

      const isLastScreenInChapter = prevState.currentScreenIndex === currentChapter.screens.length - 1;
      const isLastChapter = prevState.currentChapterIndex === configuration.chapters.length - 1;

      if (isLastScreenInChapter && isLastChapter) {
        return prevState;
      }

      if (isLastScreenInChapter) {
        return {
          ...prevState,
          currentChapterIndex: prevState.currentChapterIndex + 1,
          currentScreenIndex: 0
        };
      }

      return {
        ...prevState,
        currentScreenIndex: prevState.currentScreenIndex + 1
      };
    });
    
    return null;
  }, [getCurrentScreen, validateCurrentScreen, configuration]);

  const previousScreen = useCallback(() => {
    setState(prevState => {
      if (prevState.currentScreenIndex === 0 && prevState.currentChapterIndex === 0) {
        return prevState;
      }

      if (prevState.currentScreenIndex === 0) {
        const previousChapter = configuration.chapters[prevState.currentChapterIndex - 1];
        return {
          ...prevState,
          currentChapterIndex: prevState.currentChapterIndex - 1,
          currentScreenIndex: previousChapter.screens.length - 1
        };
      }

      return {
        ...prevState,
        currentScreenIndex: prevState.currentScreenIndex - 1
      };
    });
  }, [configuration]);

  const submitForm = useCallback((): string | null => {
    const validation = validateCurrentScreen();
    if (!validation.isValid) {
      return validation.firstInvalidFieldId;
    }

    let allValid = true;
    const allErrors: ValidationErrors = {};

    configuration.chapters.forEach(chapter => {
      chapter.screens.forEach(screen => {
        const screenErrors = validateScreen(screen.questions, state.answers);
        Object.assign(allErrors, screenErrors);
        if (Object.keys(screenErrors).length > 0) {
          allValid = false;
        }
      });
    });

    if (!allValid) {
      setState(prevState => ({
        ...prevState,
        errors: allErrors
      }));
      return Object.keys(allErrors)[0] || null;
    }

    setState(prevState => ({
      ...prevState,
      isSubmitted: true
    }));

    console.log('Form submitted successfully!');
    console.log('Final answers:', state.answers);
    return null;
  }, [validateCurrentScreen, configuration, state.answers]);

  const getProgressPercentage = useCallback((): number => {
    let totalScreens = 0;
    let completedScreens = 0;

    configuration.chapters.forEach((chapter, chapterIndex) => {
      chapter.screens.forEach((_screen, screenIndex) => {
        totalScreens++;
        
        if (chapterIndex < state.currentChapterIndex || 
            (chapterIndex === state.currentChapterIndex && screenIndex <= state.currentScreenIndex)) {
          completedScreens++;
        }
      });
    });

    return totalScreens > 0 ? Math.round((completedScreens / totalScreens) * 100) : 0;
  }, [configuration, state.currentChapterIndex, state.currentScreenIndex]);

  return {
    state,
    updateAnswer,
    nextScreen,
    previousScreen,
    validateCurrentScreen,
    submitForm,
    isCurrentScreenValid,
    getCurrentScreen,
    getCurrentChapter,
    getProgressPercentage
  };
};
