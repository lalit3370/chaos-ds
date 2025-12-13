import '../src/styles/reset.scss';
import '../src/styles/variables.scss';
import '../src/styles/globals.scss';
import '../src/foundations/themes/dark.scss';

export const globalTypes = {
  theme: {
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme',
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};

const preview = {
  parameters: {
    layout: 'centered',
    a11y: { test: 'todo' },
  },

  decorators: [
    (Story, context) => {
      document.documentElement.setAttribute(
        'data-theme',
        context.globals.theme
      );

      return <Story />;
    },
  ],
};

export default preview;
