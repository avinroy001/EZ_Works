import React, { useState } from 'react'
import "./Email.css"
const Email = () => {
    const [email,setEmail]=useState(null)
    console.log(email)
    const handleClick=(e)=>{
        e.preventDefault()
    }
  return (
    <form onSubmit={handleClick}>
        <input className="emailid" type='email' placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
        <input className='btn' type='submit'/>
    </form>
  )
}

export default Email