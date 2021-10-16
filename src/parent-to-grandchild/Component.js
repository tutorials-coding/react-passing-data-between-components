import { Context } from './context'
import { useState } from 'react'

import Parent from './Parent'

export const Component = () => {
  const [name, setName] = useState()

  return (
    <Context.Provider value={{ name, setName }}>
      <Parent />
    </Context.Provider>
  )
}
