import { createGlobalStyle } from "styled-components";

import retroGamingFont from "./fonts/retro-gaming.ttf";
import alkhemikalFont from "./fonts/alkhemikal.ttf";
import veniceFont from "./fonts/venice-classic.ttf";
import bitcellFont from "./fonts/bitcell.ttf";
import edunlineFont from "./fonts/edunline.ttf";
import owreKyngeFont from "./fonts/owre-kynge.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "retro";
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
@font-face {
  font-family: "bitcell";
  src: url(${bitcellFont}) format('truetype');
}
@font-face {
  font-family: "edunline";
  src: url(${edunlineFont}) format('truetype');
}
@font-face {
  font-family: "owre";
  src: url(${owreKyngeFont}) format('truetype');
}
*{
  font-family: "retro", Helvetica, Sans-Serif;
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