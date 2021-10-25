import { useContext } from 'react'
import Form from 'react-bootstrap/Form'

import { Context } from '../context'
import Child from '../Child'
import './Parent.css'

export const Parent = () => {
  const { setName } = useContext(Context)

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="parent__main-container">
      <p>
        <i>Parent Component</i>
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

      <Child />
    </div>
  )
}
