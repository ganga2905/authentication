import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/register',{name,email,password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err)
        )

    }
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                 placeholder='Enter Name'
                 onChange={(e)=>setName(e.target.value)}/><br/><br/>
                 <input type="email"
                  placeholder='Enter Email'
                   onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                  <input type='password'
                  placeholder='Enter Password'
                   onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
                  <button type='submit'>Register</button>
                </form>
                  <p>Already Have an Account</p>
                  <Link to='/login'>Login</Link>
        </div>
    </div>
  )
}

export default Signup