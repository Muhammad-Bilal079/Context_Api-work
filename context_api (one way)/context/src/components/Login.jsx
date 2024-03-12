import React,{useState,useContext} from 'react'
import UserContext from '../context/Usercontext'

function Login() {
    const [username , setUsername] = useState(' ')
    const [password, setPassword] = useState(' ')

    const {setUser} = useContext(UserContext)
    // yeah setUser hamaray pass prop kay through UserContext say aya hai or ab main is setUser main jo bhi changes karunga ya jo bhi value dunga to  wo mujhay user main mil jain gi 

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <div>
        <h1>Login</h1>

       <div style={{display:'flex',flexDirection:'column'}}>
       <input 
        type="text" placeholder='username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}/>

        <input style={{margin:'20px'}}
         type="text"  placeholder='password' 
         value={password}
         onChange={(e)=>setPassword(e.target.value)}/>

        <button onClick={handleSubmit}>submit</button>
       </div>

    </div>
  )
}

export default Login