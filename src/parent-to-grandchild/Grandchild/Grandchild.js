import { useContext } from 'react'
import { Context } from '../context'

import './Grandchild.css'

export const Grandchild = () => {
  const { name } = useContext(Context)

  return (
    <div className="grandchild__main-container">
      <span>Name is: {name || '<Not set>'}</span>
    </div>
  )
}
