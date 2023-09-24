import { createGlobalStyle } from "styled-components";

import retroGamingFont from "./fonts/retro-gaming.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "retro-gaming";
    src: url(${retroGamingFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
}
*, body {
    font-family: "retro-gaming", Helvetica, Sans-Serif;
  }
`

export default GlobalStyle;