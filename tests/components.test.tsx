import {expect, test,vi} from 'vitest'
import {render} from '@testing-library/react'
import React from 'react'
import {MagicComponentsProvider} from '../src/magiccomponentsreact'

test('components mount test ',()=> {
    
    vi.spyOn(console,'log')

    const { getByText } = render(
        <MagicComponentsProvider init={{tagName:'app-app',data:{},ville:'cotonou'}}>
            <p>Magic component p</p>
        </MagicComponentsProvider>
    );
    expect(getByText("Magic component p")).toBeTruthy();
})
