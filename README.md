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
import { createRoot } from "react-dom/client"


const User=({data})=> {
    const {name,age}=data

    console.log(name,age) //abla 25

    return <p>Name:{name} - Age:{age}</p>
}

define({tagname:'user-user'},async ({element,props})=> {
    
    createRoot(element).render(
            <User data={props} />
    )
    
})

```

```html

    <div>
        <user-user data-name='abla' data-age='25' ></user-user>
    </div>

```

## Data Refresh

You can refresh custom element props coming from the server using the `refreshProps()` function

```tsx

    const User=({refreshData})=> {

        const handleClick=()=> {
            refreshData().then((newData)=>{
                console.log(newData)
            })
        }
        
        return <>
                <p>Name:{name} - Age:{age}</p>
                <button onClick={handleClick}>
                    click me
                </button>
            </>
    }

    define({tagname:'user-user'},async ({element,props,refreshData})=> {
    
        createRoot(element).render(
                <User refreshData={refreshData} />
        )
        
    })
```
**⚠️ Important**:If you mount a component in multiple places within your application, the refresh method will not work unless you add a data-key attribute to each instance of the component.

## License

MagicComponents is licensed under the [MIT License](LICENSE).