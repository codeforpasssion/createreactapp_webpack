import React ,{useState,useEffect}from 'react';

function useLocalStorage(key,initialState) {
    const get = ()=>{
        const initialValue = localStorage.getItem(key);
        if(initialValue){
            return JSON.parse(initialValue)
        }
        return initialState;
    }
    const [value, setValue] = useState(get());

    useEffect(() => {
        localStorage.setItem(key,value)
    }, [value])

    return [value,setValue];
}

export default useLocalStorage;

