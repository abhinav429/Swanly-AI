# Swanly AI - Compatibility Assessment Form

A sophisticated, multi-step React form application designed for compatibility assessment and partner matching. Built with React, TypeScript, and Tailwind CSS, this application provides a seamless user experience for collecting detailed user information across multiple chapters and screens.

## 🚀 Features

- **Multi-Chapter Form Structure**: Organized into logical chapters (Personal Foundation, Personality & Values, Relationship Goals)
- **Progressive Form Navigation**: Step-by-step progression with validation at each screen
- **Responsive Design**: Built with Tailwind CSS for optimal viewing on all devices
- **Type Safety**: Full TypeScript implementation with comprehensive type definitions
- **Form Validation**: Real-time validation with custom error messages
- **Progress Tracking**: Visual progress indicator showing completion status
- **Context-Based State Management**: React Context for efficient state management
- **Custom Hooks**: Reusable hooks for form logic and state management

## 🛠️ Tech Stack

- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.1.2** - Fast build tool and development server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **ESLint** - Code linting and quality assurance

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn**
- **Git** (for version control)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/swanly-ai-form.git
cd swanly-ai-form
```

### 2. Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### 4. Build for Production

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

The built files will be in the `dist` directory.

### 5. Preview Production Build

```bash
npm run preview
```

or with yarn:

```bash
yarn preview
```

## 📁 Project Structure

```
src/
├── components/
│   └── form/
│       ├── FormContainer.tsx      # Main form container component
│       ├── NavigationControls.tsx # Navigation buttons (Next/Previous)
│       ├── ProgressIndicator.tsx  # Progress bar component
│       └── QuestionRenderer.tsx   # Dynamic question rendering
├── config/
│   └── formConfiguration.ts       # Form structure and questions
├── context/
│   └── FormContext.tsx           # React Context for form state
├── hooks/
│   ├── useFormContext.ts         # Custom hook for form context
│   └── useFormState.ts           # Custom hook for form state management
├── types/
│   └── form.types.ts             # TypeScript type definitions
├── utils/
│   └── validation.utils.ts       # Validation utility functions
├── App.tsx                       # Main application component
└── main.tsx                      # Application entry point
```

## 🎯 Form Structure

The form is organized into three main chapters:

### 1. Personal Foundation
- **Basic Profile**: Name, email, phone, date of birth, gender, preferences
- **Location & Lifestyle**: Current location, long-distance preferences, living situation

### 2. Personality & Values
- **Core Values & Beliefs**: Life priorities, religion importance, ideal weekend
- **Communication & Emotional Intelligence**: Conflict handling, communication style, affection style

### 3. Relationship Goals & Preferences
- **Relationship Intentions**: Relationship type, marriage timeline, children preferences
- **Compatibility Preferences**: Education level, career ambition, deal breakers

## 🔧 Configuration

The form structure is defined in `src/config/formConfiguration.ts`. You can easily modify:

- Form title and description
- Chapter titles and descriptions
- Screen layouts and questions
- Validation rules
- Question types and options

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the Tailwind configuration in `tailwind.config.js`
2. Adding custom CSS classes in `src/index.css`
3. Updating component-specific styles

### Form Configuration
To modify the form structure:

1. Edit `src/config/formConfiguration.ts`
2. Update the `FORM_CONFIGURATION` object
3. Modify question types, validation rules, and options as needed

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project includes:
- **ESLint** configuration for code quality
- **TypeScript** for type safety
- **Prettier** (recommended) for code formatting

## 🚀 Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to GitHub Pages or your preferred hosting service.

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to Netlify or connect your GitHub repository.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/swanly-ai-form/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Bundled with [Vite](https://vitejs.dev/)
- Type-safe with [TypeScript](https://www.typescriptlang.org/)

---

**Happy Coding! 🎉**