import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/api/register',{name,email,password})
        .then(res=>{
          console.log(res);
          navigate('/login')
          
        })
        .catch(err=>console.log(err.meassage)
        )

    }
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                 placeholder='Enter Name'
                 value={name}
                 onChange={(e)=>setName(e.target.value)}/><br/><br/>
                 <input type="email"
                  placeholder='Enter Email'
                  value={email}
                   onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                  <input type='password'
                  placeholder='Enter Password'
                  value={password}
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