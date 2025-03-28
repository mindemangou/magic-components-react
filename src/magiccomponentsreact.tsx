import { createContext, type PropsWithChildren } from "react"

export const MagicContext=createContext({})

type BrigeProviderType=PropsWithChildren<{
    init:any
}>

export const MagicComponentsProvider=({children,init}:BrigeProviderType)=> {
    return <MagicContext value={{...init}}>
                {children}
            </MagicContext>
}