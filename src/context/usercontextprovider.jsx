import React from "react";
import usercontext from './usercontext'

const usercontextprovider = ({children}) =>{

    const {user , setuser} = React.useState[null]
    return(
        <usercontext.provider value={{user,setuser}}   >
        {children}
        
        
        </ usercontext.provider>
    )


}

export default usercontextprovider