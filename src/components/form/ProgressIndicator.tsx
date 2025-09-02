import React from 'react';
import { useFormContext } from '../../hooks/useFormContext';

/**
 * Component that displays the user's progress through the form
 * Shows current chapter, screen, and overall percentage with Swanly AI branding
 * 
 * @returns Progress indicator component
 */
export const ProgressIndicator: React.FC = () => {
  const { state, getCurrentChapter, getCurrentScreen, getProgressPercentage } = useFormContext();
  
  const currentChapter = getCurrentChapter();
  const currentScreen = getCurrentScreen();
  const progressPercentage = getProgressPercentage();

  if (!currentChapter || !currentScreen) {
    return null;
  }

  /**
   * Gets the progress message based on current progress
   * @returns Progress message
   */
  const getProgressMessage = (): string => {
    if (progressPercentage <= 25) {
      return 'Building your foundation...';
    } else if (progressPercentage <= 50) {
      return 'Understanding your personality...';
    } else if (progressPercentage <= 75) {
      return 'Discovering your preferences...';
    } else {
      return 'Almost ready to find your match!';
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">
            {getProgressMessage()}
          </span>
          <span className="text-sm font-bold text-purple-600">
            {progressPercentage}% Complete
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Current Chapter and Screen Info */}
      <div className="bg-gradient-to-r from-purple-50 to-amber-50 border border-purple-200 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {state.currentChapterIndex + 1}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">
                {currentChapter.title}
              </h3>
              <p className="text-sm text-gray-600">
                {currentChapter.description}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">
              Screen {state.currentScreenIndex + 1} of {currentChapter.screens.length}
            </div>
            <div className="text-xs text-purple-600 font-medium">
              {currentScreen.questions.length} questions
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-center space-x-2 text-sm">
        <span className="text-gray-500">Chapter {state.currentChapterIndex + 1}</span>
        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-purple-600 font-medium">{currentScreen.title}</span>
      </div>

      {/* Progress Milestone */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-purple-200 shadow-sm">
          <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-gray-700">
            {Math.round((progressPercentage / 100) * 80)} compatibility parameters analyzed
          </span>
        </div>
      </div>
    </div>
  );
};
