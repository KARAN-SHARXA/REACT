import React, { useState } from 'react'

function Coditionrendring() {
 const[islogin,setlogin]=useState(true);




return(
  <div>
    {islogin ? <button>login</button> : <button>logout</button>}
  </div>
)










//  if(islogin){
//   return(
//     <button>login</button>
//   )
//  }
//  else{
//   return(
//     <button>logout</button>
//   )
//  }
}

export default Coditionrendring