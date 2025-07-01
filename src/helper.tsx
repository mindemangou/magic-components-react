import Dompurify from 'dompurify'
import parse from 'html-react-parser'
import type { SlotsType } from './magiccomponents-react'

export const getSlotsForReact = (template: HTMLTemplateElement): SlotsType => {
    if (template) {
        const content = template.content
        const tags = [...content.querySelectorAll("[slot]")]
        const tagMap = new Map()

        for (const tag of tags) {
            const outerHTML = tag.outerHTML
            const sanitized = Dompurify.sanitize(outerHTML)
            const parsed = parse(sanitized)

            const slotName = tag.getAttribute('slot')
            if (sanitized && slotName) {
                tagMap.set(slotName, parsed)
            }
        }

        // Pour tout le contenu
        const container = document.createElement("div")
        container.appendChild(content.cloneNode(true))
        const allSanitized = Dompurify.sanitize(container.innerHTML)
        const allParsed = parse(allSanitized)

        tagMap.set('allSlots', allParsed)

        return Object.fromEntries(tagMap)
    }

    return { allSlots: '' }
}


// import Dompurify from 'dompurify'
// import parse from 'html-react-parser'
// import type { SlotsType } from './magiccomponents-react'

// export const getSlotsForReact = (template: HTMLTemplateElement): SlotsType => {
//     if (template) {
//         const content = template.content
//         const tags = [...content.querySelectorAll("[slot]")]
//         const tagMap = new Map<string, any>()

//         for (const tag of tags) {
//             const outerHTML = tag.outerHTML
//             const sanitized = Dompurify.sanitize(outerHTML)
//             const parsed = parse(sanitized)

//             const slotName = tag.getAttribute('slot')
//             if (sanitized && slotName) {
//                 tagMap.set(slotName, <>{parsed}</>) // 👈 Toujours envelopper dans un fragment
//             }
//         }

//         // Pour tout le contenu
//         const container = document.createElement("div")
//         container.appendChild(content.cloneNode(true))
//         const allSanitized = Dompurify.sanitize(container.innerHTML)
//         const allParsed = parse(allSanitized)

//         tagMap.set('allSlots', <>{allParsed}</>) // 👈 Fragment aussi ici

//         return Object.fromEntries(tagMap)
//     }

//     return { allSlots: '' }
// }



// const x=parse("<p slot='ecole'>JSJS</p>")

// console.log(x)
// const res=getSlotsForReact(document.querySelector('template'))

// console.log(res)