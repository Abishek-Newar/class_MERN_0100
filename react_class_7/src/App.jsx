import {BrowserRouter, Routes, Route} from "react-router-dom"
import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
import Component3 from "./components/Component3"

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Component1/>} />
        <Route path="/comp2" element={<Component2 />} />
        <Route path="/comp3" element={<Component3/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
