import React, { useState } from 'react'
import Mouseeffect from './Mouseeffect'

export default function Mousecontainer() {
    const [display,setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <Mouseeffect/>  }
    </div>
  )
}