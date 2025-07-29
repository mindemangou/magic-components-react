import type {ReactNode} from 'react'


export type ReactAdaptaterType=(element: HTMLElement|null) => ({[key:PropertyKey]:ReactNode});
 
declare module '@mindemangou/magiccomponents-react' {
    /**
     * Extracts and parses slots from a HTMLElement for React usage.
     * @param element - The HTMLElement to extract slots from.
     * @returns An object mapping slot names to parsed React nodes.
     */
    export const ReactAdaptater:ReactAdaptaterType 

}
