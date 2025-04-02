import { useCallback, useContext, useState } from "react"
import {ajax,trigger} from 'htmx.org'
import { getProps,getPath } from "@mindemangou/magiccomponents"
import { InitType, MagicContext } from "./magiccomponentsreact"

export const useMagicData=<T={[k:string]:string}>()=> {
    
    const contextData=useContext(MagicContext) as InitType<T>
        
    const [state,setState]=useState({contextData,processing:false,error:false})

    const key=contextData.key
    
    const refresh=useCallback((query:Record<string,string>={},fragment:string='')=> {
        
        const tagName=contextData.tagName

        if(key===undefined) {
            console.warn(`You must add the data-key attribute on each ${tagName}`)
            return ;
        }
        setState((oldState)=>({...oldState,processing:true}))

        const template=document.createElement('template')

        template.id=tagName
        
        document.body.appendChild(template)

        const path=getPath(query,fragment)

        const selector=`${tagName}[data-key='${contextData.key}']`
        
        ajax('GET',path,{target:`#${tagName}`,select:selector,swap:'innerHTML'}).then(()=> {
            
            const element=template.firstElementChild as HTMLElement
    
            const newdata=getProps(element) as InitType<T>
    
            setState(()=>({contextData:newdata,processing:false,error:false}))
    
        }).then(()=>{
            template.remove()
        }).catch((err)=> {
            console.error(err)
            setState((oldState)=>({...oldState,processing:false,error:true}))
        })  
          
    
    },[])

    const send=useCallback((name:string,data:any)=> {
        
        const element=document.querySelector(name)
        
        if(element) {
            
            trigger(element,'incoming_data',{tagName:name,data})
        }

    },[])


    return {...state.contextData,processing:state.processing,error:state.error,refresh,send}
}

export const useDataBag=()=> {
    
    const data=useContext(MagicContext) as InitType
    
    const element=document.querySelector(data.tagName)

    const [dataBag,setDataBag]=useState<any[]>([])

    element?.addEventListener('incoming_data', (evt) => {

        const customEvent = evt as CustomEvent<{ elt: HTMLElement; [key: string]: any }>;

        const { elt, ...rest } = customEvent.detail;

        setDataBag(() => {
            return [...dataBag, rest];
        });
    });

    return dataBag
}
