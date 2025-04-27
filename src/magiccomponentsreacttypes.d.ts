import type { PropsWithChildren,JSX } from "react";

type DefaultPropsType={
    tagName: string
    data: Record<string, any>
    key?:string
}

type InitType<T={ [k:string]:string}> =DefaultPropsType & T


export type MagicComponentsProviderType=PropsWithChildren<{
    init:DefaultPropsType|InitType|object
}>

declare module '@mindemangou/magiccomponents-react' {

    /**
     * Fournisseur de contexte pour les composants magiques.
     */
     const MagicComponentsProvider:(
        props: MagicComponentsProviderType
    ) => JSX.Element;
}
