import React, { useContext } from 'react'
import { context } from '../App'

const Callback = () => {
  const {count} = useContext(context)
  return (
    <div>{count}</div>
  )
}

export default Callback