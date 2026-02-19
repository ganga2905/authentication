import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/login',{email,password})
    .then((res)=>{
      console.log(res);
      if(res.data==="success"){
              navigate('/home')
      }

    })
    .catch(err=>console.log(err.message)
    )
  }

  return (
    <div>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email"
           placeholder=' Enter email'
            value={email}
          onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
           <input type="password"
            placeholder=' Enter password'
             value={password}
          onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
          
        </form>

      </div>

        
    </div>
  )
}

export default Login