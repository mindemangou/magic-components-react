import { createContext } from "react"
import type {MagicComponentsProviderType} from './types'

export const MagicContext=createContext({})



export const MagicComponentsProvider=({children,init}:MagicComponentsProviderType)=> {
    return <MagicContext value={{...init}}>
                {children}
            </MagicContext>
}