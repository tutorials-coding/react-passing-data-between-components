import './Child.css'

export const Child = ({ name }) => {
  return (
    <div className="child__main-container">
      <span>Name is: {name || '<Not set>'}</span>
    </div>
  )
}
