import { useEffect, useMemo, useRef, useState } from "react"

const nums = new Array(30_000_000).fill(0).map((_,index)=>{
  return {
    index: index,
    isMagical: index===29_000_000
  }
})
function App() {
  //hooks: to perform a certain operations 
  // 1. useState: to make state mutable 
  // 2. useEffect : to stop from unnecessary rerendering
  // 3. useRef: to select the DOM element / fixing values over re renders
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
  let a = useRef(0)
  function handleCount(){
    a.current+=1
    console.log(a.current)
    setCount(count+1)
  }

  function handleTable(){
    setTable(table + 7)
    buttonRef.current.style.backgroundColor = "yellowgreen"
  }

  const [num,setNum] = useState(nums)

  const magical = useMemo(()=>{
    return num.find((item)=>item.isMagical === true)
  },[])

  useEffect(()=>{
    console.log("re rending...")
  },[table])

  let buttonRef = useRef()


  // let value = 10 
  // function changeValue(){
  //   value += 1
  //   console.log(value)
  // }
  return (
    <>
    {magical.index}
      {data}
      <button onClick={handleCall}>call</button>
      <br />
      <button onClick={handleCount}>{count}</button>
      <br/>
      <button ref={buttonRef}  onClick={handleTable}>{table}</button>
      {/* {value}
      <button onClick={changeValue}>change</button> */}
    </>
  )
}

export default App
