import parse from 'html-react-parser';

/**
 * Represents the type of slots returned for React components.
 * Keys are slot names, values are the result of html-react-parser.
 * 
 */
export type SlotsType<Keys extends PropertyKey = string> = { [key in Keys]: ReturnType<typeof parse> };
 
declare module '@mindemangou/magiccomponents-react' {
    /**
     * Extracts and parses slots from a HTMLElement for React usage.
     * @param element - The HTMLElement to extract slots from.
     * @returns An object mapping slot names to parsed React nodes.
     */
    export const getSlotsForReact: (element: HTMLElement|null) => SlotsType;

}
