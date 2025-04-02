import { createContext, type PropsWithChildren } from "react"

export const MagicContext=createContext({})

type DefaultPropsType={
    tagName: string
    data: Record<string, any>
    key?:string
}

export type InitType<T={ [k:string]:string}> =DefaultPropsType & T

type BrigeProviderType=PropsWithChildren<{
    init:DefaultPropsType|InitType
}>

export const MagicComponentsProvider=({children,init}:BrigeProviderType)=> {
    return <MagicContext value={{...init}}>
                {children}
            </MagicContext>
}