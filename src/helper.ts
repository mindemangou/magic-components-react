import Dompurify from 'dompurify'
import parse from 'html-react-parser'
import { ReactAdapterType } from './magiccomponents-react-types';

const sanitizeConfig = {
    FORBID_TAGS: ['style', 'script', 'iframe', 'object', 'embed',"link","meta"]
};

export const ReactAdapter:ReactAdapterType = (element) => {

    // Vérification de l'environnement DOM
    if (typeof document === 'undefined' || element===null) {
        return {  }
    }

    let content;

    if(element instanceof ShadowRoot){

        content=element.host
    }else if(element instanceof HTMLTemplateElement){

        content=element.content
    }else {
        content=element
    }
   
    const tags = [...content.children]
    const tagMap = new Map()
     
    for (const tag of tags) {

        const slotName = tag.getAttribute('slot')

        //Remove slot attribute
        tag.removeAttribute("slot")

        if(!slotName){
            continue
        }

        const isMagicFragment=tag.tagName.toLocaleLowerCase() === 'magic-fragment'

        const dirty =isMagicFragment? tag.innerHTML :tag.outerHTML
        const sanitized = Dompurify.sanitize(dirty, sanitizeConfig)
        const parsed = parse(sanitized)

        if (sanitized && slotName) {
            tagMap.set(slotName, parsed)
        }
    }


    return Object.fromEntries(tagMap)
}



