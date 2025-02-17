import React, { useContext } from 'react'
import { context } from '../App'

const Button = () => {
    const {count,setCount} = useContext(context)
  return (
    <button onClick={()=>{setCount(count + 1)}}>inc</button>
  )
}

export default Button