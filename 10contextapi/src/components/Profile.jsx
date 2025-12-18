import React from "react";
import { useState, useContext } from "react";
import usercontext from "../Context/UseContext";

function Profile (){

    const {user} =useContext(usercontext)

    if (!user) return <div> PLS Login </div>

    return <div>
        welcome : {user.username}
        
    </div>

}

export default Profile;