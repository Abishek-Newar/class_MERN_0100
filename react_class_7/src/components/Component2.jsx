import React from 'react'
import { useNavigate } from 'react-router-dom'

const Component2 = () => {
    const navigate = useNavigate()
    function go(){
        navigate("/comp3")
    }
  return (
    <div>
        Component2
        <button onClick={go}>GO TO COMP 3</button>
    </div>
  )
}

export default Component2