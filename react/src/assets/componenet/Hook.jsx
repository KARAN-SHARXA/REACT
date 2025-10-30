import React, { useState } from 'react'

function Hook() {

  const [first, setfirst] = useState(0)
  const counter =()=>{
    setfirst(first+1)
   
  }
  
  return (
    <div>
         <p>You have cliked {first} </p>
         <button onClick={counter} >clicke me</button>
    </div>
  )
}

export default Hook