const STORAGE_KEY = localStorage

export const getStorage = (key: string) => {
    const data = STORAGE_KEY.getItem(key)
    try {
        return JSON.parse(data || '{}')
    } catch (e) {
        return data;
    }
}

export const setStorage = (key:string, value: any) =>{
    STORAGE_KEY.setItem(key, value)
}

export const removeStorage = (key: string) => {
    STORAGE_KEY.removeItem(key)
}

export const clearStorage = () => {
    STORAGE_KEY.clear()
}