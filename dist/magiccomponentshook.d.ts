
type InitType<T = { [k: string]: string; }> = {
    tagName: string;
    data: Record<string, any>;
    key?: string;
} & T

declare module 'magiccomponents-react/hook' {

    /**
     * Hook pour gérer les données magiques.
     */
  const useMagicData: <T = Record<string, string>>() => {
    processing: boolean;
    error: boolean;
    refresh: (query?: Record<string, string>, fragment?: string) => void;
    send: (name: string, data: any) => void;
  } & InitType<T>;
  
  /**
   * Hook pour gérer un sac de données.
   */
    const useDataBag: <T = any>() => T[];
}
