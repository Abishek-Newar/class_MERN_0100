import { createContext, useCallback, useState } from "react"
import Callback from "./Component/Callback"
import Button from "./Component/Button"

export const context = createContext(null)

function App() {
  const [count,setCount] = useState(0)
  return (
    <>
      <context.Provider value={{count,setCount}}>
      <Callback />
      <Button />
      </context.Provider>
    </>
  )
}

export default App
