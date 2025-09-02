import React from 'react';
import { useFormContext } from '../../hooks/useFormContext';
import { QuestionRenderer } from './QuestionRenderer';
import { ProgressIndicator } from './ProgressIndicator';
import { NavigationControls } from './NavigationControls';

const SuccessMessage: React.FC = () => {
  return (
    <div className="text-center space-y-8">
      {/* Success Animation */}
      <div className="bounce-in">
        <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-amber-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <svg
            className="w-12 h-12 text-white heart-beat"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>
      
      {/* Success Content */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          🎉 Your Compatibility Profile is Complete!
        </h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
          Thank you for sharing your preferences with us. We're analyzing thousands of profiles to find your perfect match using our 80+ compatibility parameters.
        </p>
      </div>
      
      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-50 to-amber-50 border border-purple-200 rounded-xl p-6 max-w-md mx-auto">
        <h3 className="font-bold text-purple-800 text-lg mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          What happens next?
        </h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li className="flex items-start space-x-2">
            <span className="text-purple-500 font-bold">•</span>
            <span>We'll analyze your responses using our AI-powered matching algorithm</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-purple-500 font-bold">•</span>
            <span>You'll receive your first match within 24 hours</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-purple-500 font-bold">•</span>
            <span>Continue to receive one quality match per day</span>
          </li>
        </ul>
      </div>

      {/* Celebration Animation */}
      <div className="flex justify-center space-x-2">
        {['🎉', '✨', '💫', '🌟', '💖'].map((emoji, index) => (
          <div
            key={index}
            className="text-2xl animate-bounce"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Swanly AI Branding */}
      <div className="bg-white border border-purple-200 rounded-xl p-4 max-w-md mx-auto">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-purple-600">Swanly AI</span> - India's first emotionally intelligent matchmaking app
        </p>
      </div>
    </div>
  );
};

export const FormContainer: React.FC = () => {
  const { state, getCurrentScreen } = useFormContext();
  const currentScreen = getCurrentScreen();

  if (state.isSubmitted) {
    return (
      <div className="min-h-screen bg-swanly-gradient flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-xl sm:max-w-2xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          <SuccessMessage />
        </div>
      </div>
    );
  }

  if (!currentScreen) {
    return (
      <div className="min-h-screen bg-swanly-gradient flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="loading-spinner mx-auto"></div>
          <p className="text-gray-600 text-lg font-medium">Building your perfect match profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-swanly-gradient flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl md:max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Form Header */}
        <div className="bg-header-gradient px-4 sm:px-6 py-6 sm:py-8 md:py-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-50"></div>
          </div>
          
          <div className="relative max-w-2xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Welcome to Swanly AI
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-purple-100 leading-relaxed mb-3 sm:mb-4">
              Help us find your perfect match through our scientifically-backed compatibility assessment. Answer honestly to get your ideal partner recommendation.
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-2 sm:p-3 inline-block">
              <p className="text-xs sm:text-sm text-white">
                We analyze 80+ compatibility parameters to find someone who truly aligns with your values, personality, and life goals.
              </p>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
            {/* Progress Indicator */}
            <div className="slide-up">
              <ProgressIndicator />
            </div>

            {/* Questions */}
            <div className="space-y-5 sm:space-y-6">
              {currentScreen.questions.map((question, index) => (
                <div
                  key={question.id}
                  className="slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <QuestionRenderer question={question} />
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="pt-6 sm:pt-8 border-t border-gray-200 slide-up">
              <NavigationControls />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
