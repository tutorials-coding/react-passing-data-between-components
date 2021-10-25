import { useContext } from 'react'
import { Context } from '../context'

import './Grandchild.css'

export const Grandchild = () => {
  const { name } = useContext(Context)

  return (
    <div className="grandchild__main-container">
      <p>
        <i>Grand child Component</i>
      </p>

      <span>Name is: {name || '<Not set>'}</span>
    </div>
  )
}
