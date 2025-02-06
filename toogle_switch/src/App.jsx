import {useState} from "react"

function App() {
  const [show,setShow] = useState(false)
  function toogle(){
    setShow(!show)
  }
  return (
    <>
      {
        show? 
        <> paragraph</>:null
      }
      <button onClick={toogle}>Toggle</button>
    </>
  )
}

export default App
