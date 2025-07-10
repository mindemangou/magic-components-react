import parse from 'html-react-parser';

/**
 * Represents the type of slots returned for React components.
 * Keys are slot names, values are the result of html-react-parser.
 * Includes a special key 'allSlots' for the entire parsed content.
 */
export type SlotsType<Keys extends PropertyKey = string> = { [key in Keys]: ReturnType<typeof parse> };
 
declare module '@mindemangou/magiccomponents-react' {
    /**
     * Extracts and parses slots from a HTMLTemplateElement for React usage.
     * @param template - The HTMLTemplateElement to extract slots from.
     * @returns An object mapping slot names to parsed React nodes, plus 'allSlots'.
     */
    export const getSlotsForReact: (template: HTMLTemplateElement) => SlotsType;

}
