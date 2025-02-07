import { useEffect, useState, useRef } from "react"

function UseEffect() {
    const [count, setCount] = useState(0)
    // useEffect
    useEffect(()=>{
        console.log("hello")
    },[])
    
    //useRef 
    //1. to refer a DOM element
    //2. kepps value fixed across re -render
    let a = useRef(0);
    const ref = useRef()
    function inc(){
      setCount(count+1)
      console.log(a)
      console.log(ref.current)
      a.current+=1
      console.log(a.current)
      ref.current.style.background = "red"
    }

    //memo, useMemo, useCallback
    // memoization
    return (
      <>
        <button ref={ref} onClick={inc}>{count}</button>
      </>
    )
  }
  
  export default UseEffect
  