import {afterEach, describe, expect, test,vi} from 'vitest'
import {render} from '@testing-library/react'
import { define } from '@mindemangou/magiccomponents'
import { UserData } from './components'
import {Browser} from 'happy-dom'

describe('Magic components react test',()=> {

    afterEach(()=> {
        vi.resetAllMocks()
    })

    test('components mount test',()=> {
    
        const { getByText } = render(
                <p>Magic component</p>
        );
        expect(getByText("Magic component")).toBeTruthy();
    })

    test('useMagicData test',async ()=> {
        
        const browser=new Browser()

        const page=browser.newPage()

        const mywindow=page.mainFrame.window
        const mydocument=mywindow.document

        vi.stubGlobal('document',mydocument)
        vi.stubGlobal('customElements',mywindow.customElements)
        
        await define({tagname:'user-user'},({element,props})=> {

             render(
                    <UserData age={props.age} name={props.name} />,
                {
                    baseElement:element
                }
             )

        })

        page.content=/*html*/`
            <html>
                <body>
                    <user-user data-name='doe' data-age='19'></user-user>
                    <user-user data-name='mindemangou' data-age='20'></user-user>
                </body>
            </html>
        `

        const myElement=mydocument.querySelectorAll('user-user');

        expect(myElement[0]?.textContent).toBe('Name:doe - Age:19')
        expect(myElement[1]?.textContent).toBe('Name:mindemangou - Age:20')

    })
    

})


