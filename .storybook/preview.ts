import type { Preview } from '@storybook/react';

import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import themes from '../src/components/ThemeProvider/themes';
import GlobalStyle from '../src/components/GlobalStyle/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import reactroTheme from './assets/reactroTheme';

const GlobalStyles = GlobalStyle;

const preview: Preview = {
  parameters: {
    docs: {
      theme: reactroTheme,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      themes: {
        strawberries: themes.strawberries,
        cinnamon: themes.cinnamon,
        cherry: themes.cherry,
        pigeon: themes.pigeon,
        lavender: themes.lavender,
      },
      defaultTheme: 'strawberries',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
