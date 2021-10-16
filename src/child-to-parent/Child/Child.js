import Form from 'react-bootstrap/Form'
import './Child.css'

export const Child = ({ onChange }) => {
  const handleNameChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className="child__main-container">
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={handleNameChange}
          />
        </Form.Group>
      </Form>
    </div>
  )
}
