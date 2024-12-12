import 'styled-components/native'
import { Colors } from './colors';
import { Variants } from './variants.interface';
import { RuleSet } from 'styled-components/native/dist/types';


declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: Colors;
    buttonVariantAssemblyLine: {
      rootStyles(variant: Variants["button"]): RuleSet<object>;
      loadingVariant(variant: Variants["button"]): Variants["loading"];
      typographVariant(): Variants["typograph"];
      typographColor(variant: Variants["button"]): keyof Colors;
    }
    loadingVariantAssemblyLine: {
      rootStyles(variant: Variants["loading"]): string;
    }
    typographVariantAssemblyLine: {
      rootStyles(variant: Variants["typograph"]): RuleSet<object>;
    }
  }
}
