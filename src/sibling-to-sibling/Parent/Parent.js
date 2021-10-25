import { useState } from 'react'

import Sibling1 from '../Sibling1'
import Sibling2 from '../Sibling2'
import './Parent.css'

export const Parent = () => {
  const [name, setName] = useState('')

  const handleNameChange = (value) => {
    setName(value)
  }

  return (
    <div className="parent__main-container">
      <p>
        <i>Parent component</i>
      </p>

      <Sibling1 onChange={handleNameChange} />
      <Sibling2 name={name} />
    </div>
  )
}
