import { useState } from 'react'
import Child from '../Child'
import './Parent.css'

export const Parent = ({}) => {
  const [name, setName] = useState('')

  const handleChange = (value) => {
    setName(value)
  }

  return (
    <div className="parent__main-container">
      <Child onChange={handleChange} />
      <span>Name is: {name || '<Not set>'}</span>
    </div>
  )
}
