import React, { memo, useContext } from 'react'
import { context } from '../App'

const Callback = () => {
    const {name} = useContext(context)
    console.log("hello")
  return (
    <div>Callback {name}</div>
  )
}

export default memo(Callback)

//contextAPI 
