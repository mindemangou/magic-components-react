# Magic components-react
Magic Components-React is a JavaScript library that allows you to easily connect your frontend and backend without using an API, thanks to custom elements

## Installation

You can install Magic components-react via

```bash
npm install @mindemangou/magiccomponents @mindemangou/magiccomponents-react 

or

pnpm install @mindemangou/magiccomponents @mindemangou/magiccomponents-react
```

## Usage

Here’s a quick example of how to use Magic components-react:

```tsx
import { define} from "@mindemangou/magiccomponents"
import {  useMagicData } from "@mindemangou/magiccomponents-react/hook"
import { MagicComponentsProvider } from "@mindemangou/magiccomponents-react"
import { createRoot } from "react-dom/client"


const User=()=> {
    const {name,age}=useMagicData()

    console.log(name,age) //abla 25

    return <p>Name:{name} - Age:{age}</p>
}

define({tagname:'user-user'},async ({element})=> {
    
    createRoot(element).render(
        <MagicComponentsProvider init={element.magicData}>
            <User/>
        </MagicComponentsProvider>
    )
    
})

```

```html

    <div>
        <user-user data-name='abla' data-age='25' ></user-user>
    </div>

```

## Data Refresh

You can refresh the data coming from the server using the `refresh()` function

```tsx
    import {  useMagicData } from "@mindemangou/magiccomponents-react/hook"
    import { MagicComponentsProvider } from "@mindemangou/magiccomponents-react"


    const User=()=> {
        const {name,age,refresh}=useMagicData()

        const handleClick=()=> {
            refresh()
        }
        
        return <>
                <p>Name:{name} - Age:{age}</p>
                <button onClick={handleClick}>
                    click me
                </button>
            </>
    }
```

## License

MagicComponents is licensed under the [MIT License](LICENSE).