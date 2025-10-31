import Button from './assets/componenet/button'

import React, { useState } from 'react'
import Nickname from './assets/componenet/Nickname'
import Name from './assets/componenet/Name'
import Map from './assets/componenet/Map'
import Hook from './assets/componenet/Hook'
import Card from './assets/componenet/Card'
import Button1 from './assets/componenet/Button1'
import Coditionrendring from './assets/componenet/Coditionrendring'
import Handling from './assets/componenet/Handling'



function App() {

  const [count1,setcount1]=useState(0);
  function handleclick(){
    setcount1(count1+1);
  }
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

      <Button1 handleclick={handleclick} >
        <h1>{count1}</h1>
      </Button1>

      <Coditionrendring></Coditionrendring>
      <Handling></Handling>
    
      
    </div>
  )
}

export default App