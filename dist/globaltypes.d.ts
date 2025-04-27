import type { PropsWithChildren,JSX } from "react";

type DefaultPropsType={
    tagName: string
    data: Record<string, any>
    key?:string
}

export type InitType<T={ [k:string]:string}> =DefaultPropsType & T

declare module '@mindemangou/magiccomponents-react/hook' {

  
  const useMagicData: <T = Record<string, string>>() => {
    processing: boolean;
    error: boolean;
    refresh: (query?: Record<string, string>, fragment?: string) => Promise<void> |void;
    send: (name: string, data: any) => void;
  } & InitType<T>;
  

    const useDataBag: <T = any>() => T[];
}



export type MagicComponentsProviderType=PropsWithChildren<{
    init:DefaultPropsType|InitType|object
}>

declare module '@mindemangou/magiccomponents-react' {

 
     const MagicComponentsProvider:(
        props: MagicComponentsProviderType
    ) => JSX.Element;
}
