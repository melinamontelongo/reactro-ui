import type { CSSProp } from "styled-components";
import Theme, { ComponentVariantProps, ComponentVariants, ThemeColorsProps } from './theme';

type ThemeType = typeof Theme;

declare module "styled-components" {
 export interface DefaultTheme extends ThemeType {
    borderRadius: string;
    borderInset: string;
    borderOutset: string;
    colors: Record<ComponentVariants, ComponentVariantProps>;
 }
}

declare module "react" {
 interface DOMAttributes<T> {
   css?: CSSProp;
 }
}