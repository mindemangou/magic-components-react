import type { PropsWithChildren,JSX } from "react";

type DefaultPropsType={
    tagName: string
    data: Record<string, any>
    key?:string
}

type InitType<T={ [k:string]:string}> =DefaultPropsType & T


declare module '@mindemangou/magiccomponents-react' {

    /**
     * Fournisseur de contexte pour les composants magiques.
     */
     const MagicComponentsProvider: <T = any>(
    props: PropsWithChildren<{ init: InitType<T> }>
    ) => JSX.Element;
}
