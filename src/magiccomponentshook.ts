import { useCallback, useContext, useState } from "react"
import {ajax,trigger} from 'htmx.org'
import { getProps,getPath } from "@mindemangou/magiccomponents"
import { MagicContext } from "./magiccomponentsreact"

export const useMagicComponentsData=()=> {
    
    const contextData=useContext(MagicContext) as any
        
    const [state,setState]=useState({contextData,processing:false,errors:false})

    const refresh=useCallback((query:Record<string,string>={},fragment:string='')=> {
            
        setState((oldState)=>({...oldState,processing:true}))

        const template=document.createElement('template')
    
        const tagName=contextData.tagName 
    
        template.id=tagName
        
        document.body.appendChild(template)

        const path=getPath(query,fragment)
    
        ajax('GET',path,{target:`#${tagName}`,select:`${tagName}`,swap:'innerHTML'}).then(()=> {
            
            const element=template.firstElementChild as HTMLElement
    
            const newdata=getProps(element)
    
            setState(()=>({contextData:newdata,processing:false,errors:false}))
    
        }).then(()=>{
            template.remove()
        }).catch((err)=> {
            console.error(err)
            setState((oldState)=>({...oldState,processing:false,errors:true}))
        })  
          
    
    },[])

    const send=useCallback((name:string,data:any)=> {
            
        const element=document.querySelector(name)
        
        if(element) {
            
            trigger(element,'incoming_data',{tagName:name,data})
        }

    },[])


    return {...state.contextData,processing:state.processing,refresh,send}
}

export const useDataBag=()=> {
    
    const data=useContext(MagicContext) as any
    
    const [dataBag,setDataBag]=useState<any[]>([])
    
    const element=document.querySelector(data.tagName)

    element?.addEventListener('incoming_data',(evt:{detail:object})=> {
       
        setDataBag((oldData)=>{

            return [...oldData,evt?.detail]
        })
        
    })

    return dataBag
}
