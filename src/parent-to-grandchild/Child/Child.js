import Grandchild from '../Grandchild'
import './Child.css'

export const Child = () => {
  return (
    <div className="child__main-container">
      <p>
        <i>Child Component</i>
      </p>

      <Grandchild />
    </div>
  )
}
