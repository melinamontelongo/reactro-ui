import type { Preview } from '@storybook/react';

import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import themes from '../src/components/ThemeProvider/themes';
import GlobalStyle from '../src/components/GlobalStyle/GlobalStyle';
import { ThemeProvider } from 'styled-components';
/* import ThemeProvider from "../src/components/ThemeProvider/ThemeProvider"; */

const GlobalStyles = GlobalStyle;

const preview: Preview = {
  parameters: {
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
        croissant: themes.croissant,
      },
      defaultTheme: 'strawberries',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
