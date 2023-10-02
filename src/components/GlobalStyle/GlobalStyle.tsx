import { createGlobalStyle } from "styled-components";

import retroGamingFont from "./fonts/retro-gaming.ttf";    //  Retro Gaming is a font by Daymarius on Dafont.com
import alkhemikalFont from "./fonts/alkhemikal.ttf";      //  Alkhemikal is a font by jeti on Dafont.com
import veniceFont from "./fonts/venice-classic.ttf";     // Venice Classic is a font by soixantedeux on Dafont.com
import bitcellFont from "./fonts/bitcell.ttf";          //  Bit Cell is a font by memesbruh03 on Dafont.com
import edunlineFont from "./fonts/edunline.ttf";       //  Edit Undo Line is a font by Ænigma on Dafont.com
import owreKyngeFont from "./fonts/owre-kynge.ttf";   //  Owre Kynge is a font by jeti on Dafont.com
import { getBaseProperty, getVariantColor } from "../../utils/variants";

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
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background: ${(props) => props.theme.colors.base.color};
}

::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.colors.base.bg};
  border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor("base", props.theme, "shadow")}
}

::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme.colors.base.hoverBg};
}
`

export default GlobalStyle;