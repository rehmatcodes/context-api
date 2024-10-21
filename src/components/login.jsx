import React,{useState,useContext} from 'react'
import usercontext from './usercontext'

function login() {
    const {username,setusername} = useState('')
    const {password,setpassword} = useState('')

    const {setuser} = useContext(useContext)

    


    const handlesubmit = (e) =>{
      e.preventdefault()
      setuser({username,password})
    }
  return (
    <div>
        <h2>login</h2>
        <input type='text'
        value={username}
        onChange={() => setusername(e.target.value)}
        
        placeholder='username'/>
        <input type='password'
           value={username}
           onChange={() => setpassword(e.target.value)}
        placeholder='password'/>
        <button onClick={handlesubmit}>Submit</button>

    </div>
  )
}

export default login