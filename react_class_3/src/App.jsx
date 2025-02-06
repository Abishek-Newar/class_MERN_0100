import { useState } from "react"
import Demo from "./components/Demo"


function App() {
  const [count,setCount] = useState(0)
  const [name,setName] = useState("abishek")
  let a =10;
  function increment(){
    setCount(count  +1)
    setName("hello")
    console.log(count)
  }

  function decrement(){
    setCount(count - 1)
    setName("hii")
    console.log(count)
  }
  return (
    <>
    <button onClick={increment}>inc</button>
    <h1>{count}</h1>
    <p>{name}</p>
    <button onClick={decrement}>dec</button> 
    <Demo name="abishek" />     
    </>
  )
}

export default App
