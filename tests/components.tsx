import React from "react"
import { useMagicData} from '../src/magiccomponentshook'

export const UserData=()=> {

    const {age,name}=useMagicData<{name:string,age:string}>()

    return <p data-testid="user-data">Name:{name} - Age:{age}</p>
}