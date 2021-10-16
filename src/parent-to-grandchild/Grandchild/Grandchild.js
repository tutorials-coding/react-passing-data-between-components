import './Grandchild.css'

export const Grandchild = ({ name }) => {
  return (
    <div className="grandchild__main-container">
      <span>Name is: {name || '<Not set>'}</span>
    </div>
  )
}
