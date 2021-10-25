import './Child.css'

export const Child = ({ name }) => {
  return (
    <div className="child__main-container">
      <p>
        <i>Child component</i>
      </p>
      <span>Name is: {name || '<Not set>'}</span>
    </div>
  )
}
