import Dompurify from 'dompurify'
import parse from 'html-react-parser'
import type { SlotsType } from './magiccomponents-react-types'

const sanitizeConfig = {
    FORBID_TAGS: ['style', 'script', 'iframe', 'object', 'embed']
};

export const getSlotsForReact = (template: HTMLTemplateElement): SlotsType => {
    // Vérification de l'environnement DOM
    if (typeof document === 'undefined') {
        return {  }
    }

    // Vérification explicite du template
    if (
        !template ||
        !(template instanceof HTMLTemplateElement) ||
        !template.content
    ) {
        return { }
    }

    const content = template.content

    const tags = [...content.querySelectorAll("[slot]")]
    const tagMap = new Map()

    for (const tag of tags) {

        const slotName = tag.getAttribute('slot')

        if(!slotName){
            continue
        }

        const isMagicFragment=tag.tagName.toLocaleLowerCase() === 'magic-fragment'

        const dirty =isMagicFragment?tag.innerHTML :tag.outerHTML
        const sanitized = Dompurify.sanitize(dirty, sanitizeConfig)
        const parsed = parse(sanitized)

        if (sanitized && slotName) {
            tagMap.set(slotName, parsed)
        }
    }

    // Pour tout le contenu
    // const container = document.createElement("div")
    // container.appendChild(content.cloneNode(true))
    // const allSanitized = Dompurify.sanitize(container.innerHTML, sanitizeConfig)
    // const allParsed = parse(allSanitized)

    // tagMap.set('allSlots', allParsed)

    return Object.fromEntries(tagMap)
}



