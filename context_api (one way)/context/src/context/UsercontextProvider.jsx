import React, { useState } from "react";
import UserContext from "./Usercontext";

const UserContextProvider = ({children})=>{

const [user , setUser] = useState(null)
// yahan per kuch bhi banain stae,object,array etc sirf is ka accesss value main dena hoga 
return(
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
)
}

export default UserContextProvider