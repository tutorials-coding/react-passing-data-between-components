import { useState } from 'react'
import Child from '../Child'
import './Parent.css'

export const Parent = () => {
  const [name, setName] = useState('')

  const handleChange = (value) => {
    setName(value)
  }

  return (
    <div className="parent__main-container">
      <p>
        <i>Parent component</i>
      </p>
      <span>Name is: {name || '<Not set>'}</span>

      <Child onChange={handleChange} />
    </div>
  )
}
