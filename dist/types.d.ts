import type { PropsWithChildren,JSX } from "react";

type DefaultPropsType={
    tagName: string
    data: Record<string, any>
    key?:string
}

export type InitType<T={ [k:string]:string}> =DefaultPropsType & T

export type MagicComponentsProviderType=PropsWithChildren<{
  init:DefaultPropsType|InitType|object
}>
