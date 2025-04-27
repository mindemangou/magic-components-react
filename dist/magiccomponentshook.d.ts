import { InitType } from "./types";


declare module '@mindemangou/magiccomponents-react/hook' {

  
    const useMagicData: <T = Record<string, string>>() => {
      processing: boolean;
      error: boolean;
      refresh: (query?: Record<string, string>, fragment?: string) => Promise<void> |void;
      send: (name: string, data: any) => void;
    } & InitType<T>;
    
  
      const useDataBag: <T = any>() => T[];
  }
  