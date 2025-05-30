import { useEffect, useState } from "react"


export const useDataBag = (tagname: string) => {

    const [dataBag, setDataBag] = useState<any[]>([])
    

    useEffect(() => {
        const element = document.querySelector(tagname)

        const callback = (evt: Event) => {
             
            const customEvent = evt as CustomEvent<{bag: any}>
            const { bag } = customEvent.detail

            setDataBag((old) => [...old,bag])

        }
        
        element?.addEventListener('incoming_data', callback)

        
        // Cleanup function to remove event listener
        return () => {
            element?.removeEventListener('incoming_data', callback)
        }
        
    }, []) 



    return dataBag
}
