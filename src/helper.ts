import Dompurify from 'dompurify'
import parse from 'html-react-parser'
import type { SlotsType } from './magiccomponents-react'

export const getSlotsForReact=(template:HTMLTemplateElement):SlotsType=>{

    if(template){

        const content=template.content

        const tags=[...content.querySelectorAll("[slot]")]

        const tagMap=new Map()
        
        for (const tag of tags) {

            const sanitizeTag=Dompurify.sanitize(tag);

            const slotName=tag.getAttribute('slot')
            
            if(sanitizeTag && slotName){
                 tagMap.set(slotName,parse(sanitizeTag.toString()))
            }

        }

        const sanitizeContent=Dompurify.sanitize(content)

        tagMap.set('allSlots',parse(sanitizeContent.toString()))

        return Object.fromEntries(tagMap)
        
    }

    return {allSlots:''}
}


// const x=parse("<p slot='ecole'>JSJS</p>")

// console.log(x)
// const res=getSlotsForReact(document.querySelector('template'))

// console.log(res)