import './Sibling2.css'

export const Sibling2 = ({ name }) => {
  return (
    <div className="sibling2__main-container">
      <span>Name is: {name || '<Not set>'}</span>
    </div>
  )
}
