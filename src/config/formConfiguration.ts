import type { FormConfiguration } from '../types/form.types';

export const FORM_CONFIGURATION: FormConfiguration = {
  title: 'Welcome to Swanly AI',
  description: 'Help us find your perfect match through our scientifically-backed compatibility assessment. Answer honestly to get your ideal partner recommendation.',
  chapters: [
    {
      id: 'personal-foundation',
      title: 'Personal Foundation',
      description: 'Let\'s start with the basics to understand who you are',
      screens: [
        {
          id: 'basic-profile',
          title: 'Basic Profile',
          description: 'Tell us about yourself so we can create your perfect match profile',
          questions: [
            {
              id: 'personal_full_name',
              type: 'text',
              text: 'Full Name',
              required: true,
              placeholder: 'Enter your full name',
              validation: {
                minLength: 2,
                maxLength: 100,
                errorMessage: 'We need your name to create your profile'
              }
            },
            {
              id: 'personal_email',
              type: 'text',
              text: 'Email Address',
              required: true,
              placeholder: 'Enter your email address',
              validation: {
                pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
                errorMessage: 'Please enter a valid email address'
              }
            },
            {
              id: 'personal_phone',
              type: 'text',
              text: 'Phone Number',
              required: false,
              placeholder: 'Enter your phone number (optional)',
              validation: {
                pattern: '^[+]?[1-9][\\d]{0,15}$',
                errorMessage: 'Please enter a valid phone number'
              }
            },
            {
              id: 'personal_dob',
              type: 'text',
              text: 'Date of Birth',
              required: true,
              placeholder: 'DD/MM/YYYY',
              validation: {
                pattern: '^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(19|20)\\d\\d$',
                errorMessage: 'Please enter your date of birth in DD/MM/YYYY format'
              }
            },
            {
              id: 'personal_gender',
              type: 'radio',
              text: 'I identify as',
              required: true,
              options: [
                { id: 'male', label: 'Male', value: 'Male' },
                { id: 'female', label: 'Female', value: 'Female' },
                { id: 'non-binary', label: 'Non-binary', value: 'Non-binary' },
                { id: 'prefer-not-to-say', label: 'Prefer not to say', value: 'Prefer not to say' }
              ]
            },
            {
              id: 'personal_looking_for',
              type: 'radio',
              text: 'I am looking for',
              required: true,
              options: [
                { id: 'men', label: 'Men', value: 'Men' },
                { id: 'women', label: 'Women', value: 'Women' },
                { id: 'everyone', label: 'Everyone', value: 'Everyone' }
              ]
            }
          ]
        },
        {
          id: 'location-lifestyle',
          title: 'Location & Lifestyle',
          description: 'Understanding your living situation helps us find compatible matches',
          questions: [
            {
              id: 'location_city',
              type: 'text',
              text: 'Current City',
              required: true,
              placeholder: 'Enter your current city',
              validation: {
                minLength: 2,
                maxLength: 50,
                errorMessage: 'Please enter your current city'
              }
            },
            {
              id: 'location_state',
              type: 'text',
              text: 'State/Region',
              required: true,
              placeholder: 'Enter your state or region',
              validation: {
                minLength: 2,
                maxLength: 50,
                errorMessage: 'Please enter your state or region'
              }
            },
            {
              id: 'location_long_distance',
              type: 'radio',
              text: 'Are you open to long-distance relationships?',
              required: true,
              options: [
                { id: 'same-country', label: 'Yes, within same country', value: 'Same country' },
                { id: 'internationally', label: 'Yes, internationally', value: 'Internationally' },
                { id: 'local-only', label: 'Only local matches', value: 'Local only' },
                { id: 'flexible', label: 'Flexible', value: 'Flexible' }
              ]
            },
            {
              id: 'lifestyle_living_situation',
              type: 'radio',
              text: 'What is your current living situation?',
              required: true,
              options: [
                { id: 'with-family', label: 'With family', value: 'With family' },
                { id: 'independent', label: 'Independent', value: 'Independent' },
                { id: 'with-roommates', label: 'With roommates', value: 'With roommates' },
                { id: 'other', label: 'Other', value: 'Other' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'personality-values',
      title: 'Personality & Values',
      description: 'Understanding your core values helps us find someone who truly aligns with you',
      screens: [
        {
          id: 'core-values-beliefs',
          title: 'Core Values & Beliefs',
          description: 'What matters most to you in life? This helps us understand your priorities',
          questions: [
            {
              id: 'values_life_priorities',
              type: 'text',
              text: 'What matters most to you in life?',
              required: true,
              placeholder: 'Tell us about your life priorities and what drives you...',
              validation: {
                minLength: 10,
                maxLength: 200,
                errorMessage: 'Please share what matters most to you in life (at least 10 characters)'
              }
            },
            {
              id: 'values_religion_importance',
              type: 'radio',
              text: 'How important is religion/spirituality in your life?',
              required: true,
              options: [
                { id: 'very-important', label: 'Very important', value: 'Very important' },
                { id: 'somewhat-important', label: 'Somewhat important', value: 'Somewhat important' },
                { id: 'not-very-important', label: 'Not very important', value: 'Not very important' },
                { id: 'not-important-at-all', label: 'Not important at all', value: 'Not important at all' }
              ]
            },
            {
              id: 'values_ideal_weekend',
              type: 'radio',
              text: 'Your ideal weekend involves',
              required: true,
              options: [
                { id: 'quiet-home', label: 'Quiet time at home', value: 'Quiet time at home' },
                { id: 'social-gatherings', label: 'Social gatherings with friends', value: 'Social gatherings with friends' },
                { id: 'outdoor-adventures', label: 'Outdoor adventures', value: 'Outdoor adventures' },
                { id: 'cultural-activities', label: 'Cultural activities', value: 'Cultural activities' },
                { id: 'learning-new', label: 'Learning something new', value: 'Learning something new' },
                { id: 'traveling', label: 'Traveling', value: 'Traveling' }
              ]
            }
          ]
        },
        {
          id: 'communication-emotional-intelligence',
          title: 'Communication & Emotional Intelligence',
          description: 'Understanding how you communicate helps us find your perfect match',
          questions: [
            {
              id: 'communication_conflict_handling',
              type: 'radio',
              text: 'How do you handle conflicts in relationships?',
              required: true,
              options: [
                { id: 'direct-discussion', label: 'Direct discussion', value: 'Direct discussion' },
                { id: 'need-time-process', label: 'Need time to process first', value: 'Need time to process first' },
                { id: 'avoid-confrontation', label: 'Avoid confrontation', value: 'Avoid confrontation' },
                { id: 'seek-compromise', label: 'Seek compromise', value: 'Seek compromise' },
                { id: 'prefer-mediation', label: 'Prefer mediation', value: 'Prefer mediation' }
              ]
            },
            {
              id: 'communication_style',
              type: 'radio',
              text: 'What\'s your communication style?',
              required: true,
              options: [
                { id: 'very-expressive', label: 'Very expressive and open', value: 'Very expressive and open' },
                { id: 'share-when-asked', label: 'Share when asked', value: 'Share when asked' },
                { id: 'keep-private', label: 'Keep things private', value: 'Keep things private' },
                { id: 'mix-open-reserved', label: 'Mix of open and reserved', value: 'Mix of open and reserved' }
              ]
            },
            {
              id: 'communication_affection_style',
              type: 'radio',
              text: 'How do you show affection?',
              required: true,
              options: [
                { id: 'physical-touch', label: 'Physical touch', value: 'Physical touch' },
                { id: 'quality-time', label: 'Quality time', value: 'Quality time' },
                { id: 'words-affirmation', label: 'Words of affirmation', value: 'Words of affirmation' },
                { id: 'acts-service', label: 'Acts of service', value: 'Acts of service' },
                { id: 'gift-giving', label: 'Gift giving', value: 'Gift giving' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'relationship-goals-preferences',
      title: 'Relationship Goals & Preferences',
      description: 'Understanding your relationship goals helps us find someone with compatible intentions',
      screens: [
        {
          id: 'relationship-intentions',
          title: 'Relationship Intentions',
          description: 'What are you looking for in a relationship? This helps us match you with someone who wants the same things',
          questions: [
            {
              id: 'goals_relationship_type',
              type: 'radio',
              text: 'What are you looking for?',
              required: true,
              options: [
                { id: 'long-term-marriage', label: 'Long-term relationship leading to marriage', value: 'Long-term relationship leading to marriage' },
                { id: 'serious-dating', label: 'Serious dating to see where it goes', value: 'Serious dating to see where it goes' },
                { id: 'casual-dating', label: 'Casual dating and companionship', value: 'Casual dating and companionship' },
                { id: 'not-sure', label: 'Not sure yet', value: 'Not sure yet' }
              ]
            },
            {
              id: 'goals_marriage_timeline',
              type: 'radio',
              text: 'Timeline for marriage',
              required: true,
              options: [
                { id: 'within-1-2-years', label: 'Within 1-2 years', value: 'Within 1-2 years' },
                { id: '2-5-years', label: '2-5 years', value: '2-5 years' },
                { id: '5-plus-years', label: '5+ years', value: '5+ years' },
                { id: 'not-interested', label: 'Not interested in marriage', value: 'Not interested in marriage' },
                { id: 'open-possibilities', label: 'Open to possibilities', value: 'Open to possibilities' }
              ]
            },
            {
              id: 'goals_children',
              type: 'radio',
              text: 'Do you want children?',
              required: true,
              options: [
                { id: 'yes-definitely', label: 'Yes, definitely', value: 'Yes, definitely' },
                { id: 'maybe-someday', label: 'Maybe someday', value: 'Maybe someday' },
                { id: 'no-never', label: 'No, never', value: 'No, never' },
                { id: 'already-have-want-more', label: 'Already have children and want more', value: 'Already have children and want more' },
                { id: 'already-have-dont-want-more', label: 'Already have children and don\'t want more', value: 'Already have children and don\'t want more' }
              ]
            }
          ]
        },
        {
          id: 'compatibility-preferences',
          title: 'Compatibility Preferences',
          description: 'Understanding your preferences helps us find your ideal match',
          questions: [
            {
              id: 'preferences_education_level',
              type: 'radio',
              text: 'Education level preference in partner',
              required: true,
              options: [
                { id: 'same-as-mine', label: 'Same as mine', value: 'Same as mine' },
                { id: 'higher-than-mine', label: 'Higher than mine', value: 'Higher than mine' },
                { id: 'doesnt-matter', label: 'Doesn\'t matter', value: 'Doesn\'t matter' },
                { id: 'similar-professional-ambition', label: 'Similar professional ambition', value: 'Similar professional ambition' }
              ]
            },
            {
              id: 'preferences_career_ambition',
              type: 'radio',
              text: 'How important is career ambition in a partner?',
              required: true,
              options: [
                { id: 'very-important', label: 'Very important', value: 'Very important' },
                { id: 'somewhat-important', label: 'Somewhat important', value: 'Somewhat important' },
                { id: 'not-very-important', label: 'Not very important', value: 'Not very important' },
                { id: 'prefer-work-life-balance', label: 'Prefer work-life balance', value: 'Prefer work-life balance' }
              ]
            },
            {
              id: 'preferences_deal_breakers',
              type: 'text',
              text: 'What are your deal breakers?',
              required: true,
              placeholder: 'e.g., smoking, different religious views, lack of ambition...',
              validation: {
                minLength: 5,
                maxLength: 200,
                errorMessage: 'Please share your deal breakers (at least 5 characters)'
              }
            }
          ]
        }
      ]
    }
  ]
};
