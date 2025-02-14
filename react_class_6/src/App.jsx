import { createContext, useCallback, useState } from "react"
import Callback from "./Component/Callback"

export const context = createContext(null)
function App() {
  const [name,setName] = useState(0)

  const handle = useCallback(()=>{
    console.log("hii")
  },[])
  return (
    <>
      <context.Provider value={{name}}>
      <Callback data={handle} />
      <button onClick={()=>{setName(name+1)}}>{name}</button>
      </context.Provider>
    </>
  )
}

export default App
