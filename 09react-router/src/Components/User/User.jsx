import React from "react";
import { useParams } from "react-router-dom";

 function User(){
    
    const {userid} = useParams()
    return(
        <div className="text-center bg-gray-400 text-white text-4xl text-shadow-black  p-4" >user: {userid}</div>
    )

}

export  default User;