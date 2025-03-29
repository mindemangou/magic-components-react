import { createContext, type PropsWithChildren } from "react"

export const MagicContext=createContext({})

export type InitType<T={ [k:string]:string}> = {
    tagName: string
    data: Record<string, any>
    key?:string
}& T

type BrigeProviderType=PropsWithChildren<{
    init:InitType
}>

export const MagicComponentsProvider=({children,init}:BrigeProviderType)=> {
    return <MagicContext value={{...init}}>
                {children}
            </MagicContext>
}