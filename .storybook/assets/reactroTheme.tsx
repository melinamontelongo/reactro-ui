import { create } from '@storybook/theming/create';
import logo from "./logo.png";

export default create({
  base: 'light',
  // Typography
  fontBase: '"retro", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Reactro UI',
  brandUrl: '.',
  brandImage: `${logo}`,
  brandTarget: '_self',

  //
  colorPrimary: '#3e2426',
  colorSecondary: '#c5811f',

  // UI
  appBg: '#f5f3ab',
  appContentBg: '#f5f3ab',
  appBorderColor: '#3e2426',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#fffed1',

  // Toolbar default and active colors
  barTextColor: '#fffcf5',
  barSelectedColor: '#c5811f',
  barBg: '#3e2426',

  // Form colors
  inputBg: '#fffed1',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});