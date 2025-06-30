import parse from 'html-react-parser';

export type SlotsType<Keys = any> = { [key in Keys]: ReturnType<typeof parse> } & { allSlots: ReturnType<typeof parse> };
 
declare module '@mindemangou/magiccomponents-react' {
      
      const getSlotsForReact: (template: HTMLTemplateElement) => SlotsType;
}
