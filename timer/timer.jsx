
 import  { useRef, useState } from 'react'


function ShowBloger() {
    
const [count,setCount]=useState(0);
    const intervel=useRef(null);

    const timer=()=>{
     intervel.current=
        setInterval(()=>{(setCount((prev)=>prev+1))
    },500)
 }

    
    const reset=()=>{
      intervel.current=setCount(0)
    }
    const stop=()=>{
        clearInterval(intervel.current)
    }
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={timer}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default ShowBloger
