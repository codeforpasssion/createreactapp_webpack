import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom'
import './index.scss'
import useLocalStorage from './useLocalStorage'
const getLocalStorageValue = ()=>{
     const initialValue = localStorage.getItem('counterValue') ;
     if(initialValue){
         return JSON.parse(initialValue);
     }
}
const Counter = ()=>{
    const [counter, setCounter] = useLocalStorage('useLocalStorage',0);
    useEffect(() => {
        document.title = `hello you have clicked ${counter} times`
    }, [counter])
    const increment = ()=>{
        setCounter((previousState)=>{
           return  previousState +1
        })
    }
    const decrement = ()=>{
        setCounter(counter-1);
    }
    
    return (
       <main className="Counter">
           <p className="count">{counter}</p>
           <section className="controls">
               <button onClick={increment}>Increment</button>
               <button onClick ={decrement}>Decrement</button>
               <button onClick ={()=>setCounter(0)}>Reset</button>
           </section>
       </main>
    )
}

ReactDOM.render(<Counter/>,document.getElementById('root'));

