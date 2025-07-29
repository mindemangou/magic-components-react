import { describe, it, expect } from 'vitest'
import { ReactAdaptater } from '../src/helper'

describe('ReactAdaptater', () => {
    it('should return named slots from a valid template', () => {
        // Utilisation de jsdom (déjà fourni par vitest avec environment: 'jsdom')
        const template = document.createElement('template')
        template.innerHTML = `
            <div slot="foo">Hello <b>Foo</b></div>
            <span slot="bar">Bar</span>
            <p>No slot</p>
        `

        // @ts-ignore
        const slots = ReactAdaptater(template)
        expect(slots.foo).toBeTruthy()
        expect(slots.bar).toBeTruthy()
    })


    it('should sanitize forbidden tags', () => {
        const template = document.createElement('template')
        template.innerHTML = `
            <div slot="x"><script>alert("xss")</script>Safe</div>
        `

        // @ts-ignore
        const slots = ReactAdaptater(template)
        expect(slots.x).toBeTruthy()
        // On vérifie que le script n'est plus dans le rendu
        // @ts-ignore
        expect(slots.x.props.children).not.toContain('<script>')
    })

      
})


