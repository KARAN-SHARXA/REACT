import Button from './assets/componenet/button'

import React from 'react'
import Nickname from './assets/componenet/Nickname'
import Name from './assets/componenet/Name'
import Map from './assets/componenet/Map'
import Hook from './assets/componenet/Hook'

function App() {
  return (
    <div>
      <Button></Button>
      <Name name="karan" ></Name>
      <Nickname name="kanu" ></Nickname>
      <Map></Map>
      <Hook></Hook>
    </div>
  )
}

export default App