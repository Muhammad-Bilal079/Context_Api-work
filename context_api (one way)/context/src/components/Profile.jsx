import React,{useContext} from 'react'
import UserContext from '../context/Usercontext'

function Profile() {
  const {user} = useContext(UserContext)
  
  if(!user)return <div>please login first</div>

   return(
    <>
    <div>Welcome {user.username}</div>
    <div>Your password will be {user.password}</div>
    </>
   )

}

export default Profile