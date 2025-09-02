import React from 'react';
import { useFormContext } from '../../hooks/useFormContext';

/**
 * Component that provides navigation controls for the form
 * Includes back, continue, and submit buttons with proper state management and Swanly AI branding
 * 
 * @returns Navigation controls component
 */
export const NavigationControls: React.FC = () => {
  const {
    state,
    nextScreen,
    previousScreen,
    submitForm,
    getCurrentScreen,
    getCurrentChapter
  } = useFormContext();

  const currentScreen = getCurrentScreen();
  const currentChapter = getCurrentChapter();

  if (!currentScreen || !currentChapter) {
    return null;
  }

  // Determine if we're at the beginning of the form
  const isFirstScreen = state.currentChapterIndex === 0 && state.currentScreenIndex === 0;
  
  // Determine if we're at the end of the form
  const isLastScreenInChapter = state.currentScreenIndex === currentChapter.screens.length - 1;
  const isLastChapter = state.currentChapterIndex === 2; // Assuming 3 chapters (0, 1, 2)
  const isLastScreen = isLastScreenInChapter && isLastChapter;

  // We validate only on click; no pre-check to keep button enabled

  /**
   * Scrolls to the first invalid field smoothly
   */
  const scrollToFirstInvalidField = (fieldId: string | null) => {
    if (!fieldId) return;
    
    const element = document.getElementById(fieldId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'nearest'
      });
      element.focus();
    }
  };

  /**
   * Handles the continue/submit button click
   */
  const handleContinueOrSubmit = () => {
    let firstInvalidFieldId: string | null = null;
    
    if (isLastScreen) {
      const result = submitForm();
      firstInvalidFieldId = result;
    } else {
      const result = nextScreen();
      firstInvalidFieldId = result;
    }
    
    if (firstInvalidFieldId) {
      scrollToFirstInvalidField(firstInvalidFieldId);
    }
  };

  /**
   * Gets the appropriate text for the continue/submit button
   * @returns Button text
   */
  const getContinueButtonText = (): string => {
    if (isLastScreen) {
      return 'Find My Match';
    }
    
    if (isLastScreenInChapter) {
      return 'Continue to Next Chapter';
    }
    
    return 'Continue';
  };

  /**
   * Gets the appropriate button styling for the continue/submit button
   * @returns Button class names
   */
  const getContinueButtonClass = (): string => {
    if (isLastScreen) {
      return 'btn-match';
    }
    
    return 'btn-primary';
  };

  /**
   * Gets the progress milestone text
   * @returns Progress milestone text
   */
  const getProgressMilestone = (): string => {
    const progressPercentage = Math.round(((state.currentChapterIndex * 2 + state.currentScreenIndex + 1) / 6) * 100);
    
    if (progressPercentage <= 25) {
      return 'Getting to know you...';
    } else if (progressPercentage <= 50) {
      return 'Understanding your values...';
    } else if (progressPercentage <= 75) {
      return 'Almost there!';
    } else {
      return 'Final touches...';
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {/* Back Button */}
        <button
          type="button"
          onClick={previousScreen}
          disabled={isFirstScreen}
          className={`flex-1 btn-secondary ${
            isFirstScreen ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          aria-label="Go to previous screen"
        >
          <div className="flex items-center justify-center space-x-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </div>
        </button>

        {/* Continue/Submit Button */}
        <button
          type="button"
          onClick={handleContinueOrSubmit}
          className={`flex-1 ${getContinueButtonClass()}`}
          aria-label={isLastScreen ? 'Submit and find your match' : 'Continue to next screen'}
        >
          <div className="flex items-center justify-center space-x-2">
            <span>{getContinueButtonText()}</span>
            {!isLastScreen && (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-purple-200">
          <div className="flex space-x-1">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i <= state.currentChapterIndex 
                    ? 'bg-purple-500' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-600">
            Chapter {state.currentChapterIndex + 1} of 3
          </span>
        </div>
      </div>

      {/* Progress Milestone */}
      <div className="text-center">
        <p className="text-sm text-purple-600 font-medium">
          {getProgressMilestone()}
        </p>
      </div>
    </div>
  );
};
