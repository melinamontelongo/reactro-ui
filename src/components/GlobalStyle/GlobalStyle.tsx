import { createGlobalStyle } from "styled-components";

import retroGamingFont from "./fonts/retro-gaming.ttf";
import alkhemikalFont from "./fonts/alkhemikal.ttf";
import veniceFont from "./fonts/venice-classic.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "retro-gaming";
    src: url(${retroGamingFont}) format('truetype');
}
@font-face {
  font-family: "alkhemikal";
  src: url(${alkhemikalFont}) format('truetype');
}
@font-face {
  font-family: "venice";
  src: url(${veniceFont}) format('truetype');
}
*{
  font-family: "retro-gaming", Helvetica, Sans-Serif;
}
body {
    background-color: ${(props) => props.theme.colors.base.bg};
    color: ${(props) => props.theme.colors.base.color};
  }

::-moz-selection{
  color: ${(props) => props.theme.colors.base.bg};
  background: ${(props) => props.theme.colors.base.color};
}

::selection {
  color: ${(props) => props.theme.colors.base.bg};
  background: ${(props) => props.theme.colors.base.color};
}
`

export default GlobalStyle;