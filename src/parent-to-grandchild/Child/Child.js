import Grandchild from '../Grandchild'
import './Child.css'

export const Child = ({ name }) => {
  return (
    <div className="child__main-container">
      <Grandchild name={name} />
    </div>
  )
}
