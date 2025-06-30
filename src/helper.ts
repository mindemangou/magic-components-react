import Dompurify from 'dompurify'
import parse from 'html-react-parser'
import type { SlotsType } from './types'

export const getSlotsForReact=(template:HTMLTemplateElement):SlotsType=>{

    if(template){

        const content=template.content

        const tags=[...content.querySelectorAll("[slot]")]

        const tagMap=new Map()
        
        for (const tag of tags) {

            const sanitizeTag=Dompurify.sanitize(tag);

            const slotName=tag.getAttribute('slot')
            
            if(sanitizeTag && slotName){
                tagMap.set(slotName,parse(sanitizeTag))
            }

            
        }

        const sanitizeContent=Dompurify.sanitize(content)

        tagMap.set('slots',parse(sanitizeContent))

        return Object.fromEntries(tagMap)
        
    }

    return {allSlots:''}
}