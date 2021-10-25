import Form from 'react-bootstrap/Form'
import './Sibling1.css'

export const Sibling1 = ({ onChange }) => {
  const handleNameChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className="sibling1__main-container">
      <p>
        <i>Sibling 1</i>
      </p>

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
