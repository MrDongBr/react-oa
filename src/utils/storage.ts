const STORAGE_KEY = localStorage

export const getStorage = <T>(key: string):T|null => {
    let data = STORAGE_KEY.getItem(key)
    if(data){
        try {
            data = JSON.parse(data);
            return data as T
        } catch {
            return data as T
        }
    }else{
        return null;
    }
   
}

export const setStorage = (key:string, value: any) =>{
    STORAGE_KEY.setItem(key, JSON.stringify(value))
}

export const removeStorage = (key: string) => {
    STORAGE_KEY.removeItem(key)
}

export const clearStorage = () => {
    STORAGE_KEY.clear()
}