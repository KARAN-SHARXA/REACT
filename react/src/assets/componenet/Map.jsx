import React from 'react'

function Map() {
  let arr = ["arun","mukesh","sanjeet","rohit"]
  return (
    <div>
      <ul>
      {arr.map((item)=>(
         <li>{item}</li>
      ))}
      </ul>
    </div>
  )
}

export default Map