import type {MagicComponentsProviderType} from "./types"
import type { JSX } from "react";

declare module '@mindemangou/magiccomponents-react' {

  const MagicComponentsProvider:(
     props: MagicComponentsProviderType
 ) => JSX.Element;
}






