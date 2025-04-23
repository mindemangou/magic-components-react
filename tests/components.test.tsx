import {expect, test,vi} from 'vitest'
import {render} from '@testing-library/react'
import React from 'react'
import {MagicComponentsProvider} from '../src/magiccomponentsreact'

test('components mount test ',()=> {
    
    const { getByText } = render(
        <MagicComponentsProvider init={{tagName:'app-app',data:{},ville:'cotonou'}}>
            <p>Magic component</p>
        </MagicComponentsProvider>
    );
    expect(getByText("Magic component")).toBeTruthy();
})
