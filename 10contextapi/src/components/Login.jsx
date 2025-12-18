import React from "react";
import { useState ,useContext } from "react";
import usercontext from "../Context/UseContext";


function Login() {

        const [username , setUsername]=useState('')
        const [Password , setPassword]=useState('')

        const {setuser} =useContext(usercontext)

    const handlesubmit = (e) => {

        e.preventDefault()
        setuser({username , Password})

     }
    return(
       <div >
        <h2>login </h2>
        <input type="text"
         value={username} 
         onChange={(e)=>{
            return setUsername(e.target.value)
        }} 
        placeholder="username" />

        <br />

        <input type="text" 
        value={Password} 
         onChange={(e)=>{
            return setPassword(e.target.value)
        }} 
        placeholder="password" />
        <button onClick={handlesubmit}>Login</button>
       </div>
    )
}

export default Login;