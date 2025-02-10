import { useEffect, useRef, useState } from "react"


function App() {
  //hooks: to perform a certain operations 
  // 1. useState: to make state mutable 
  // 2. useEffect : to stop from unnecessary rerendering
  // 3. useRef: to select the DOM element 
  // 4. useMemo 
  // 5. useCallback
  let [data,setData] = useState("hello")
  let [count,setCount] = useState(0)
  // const [varibleName,setVariableName] = useState()
  let [table,setTable] = useState(0)
  function handleCall(){
    setData("hii")
    console.log(data)
  }

  function handleCount(){
    setCount(count+1)
  }

  function handleTable(){
    setTable(table + 7)
    ref.current.style.backgroundColor = "red"
    ref.current.style.color = "white"
  }


  useEffect(()=>{
    console.log("re rending...")
  },[table])

  let ref = useRef()


  // let value = 10 
  // function changeValue(){
  //   value += 1
  //   console.log(value)
  // }
  return (
    <>
      {data}
      <button onClick={handleCall}>call</button>
      <br />
      <button onClick={handleCount}>{count}</button>
      <br/>
      <button ref={ref} onClick={handleTable}>{table}</button>
      {/* {value}
      <button onClick={changeValue}>change</button> */}
    </>
  )
}

export default App
