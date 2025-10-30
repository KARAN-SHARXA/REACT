import Button from './assets/componenet/button'

import React from 'react'
import Nickname from './assets/componenet/Nickname'
import Name from './assets/componenet/Name'
import Map from './assets/componenet/Map'
import Hook from './assets/componenet/Hook'
import Card from './assets/componenet/Card'

function App() {
  return (
    <div>
      <Button></Button>
      <Name name="karan" ></Name>
      <Nickname name="kanu" ></Nickname>
      <Map></Map>
      <Hook></Hook>
      <Card>
        <h1>best web dev</h1>
        <p>trying to gon</p>
        <p>will complete the course</p>
      </Card>

      <Card>
        hello ji kase ho srae
      </Card>
      
    </div>
  )
}

export default App