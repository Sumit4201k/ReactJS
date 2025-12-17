import { useEffect, useState } from "react";
import React from "react";
import { useLoaderData } from "react-router-dom";

 function GitHub(){
    const data = useLoaderData()
    //    const [data , setdata]=useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Sumit4201k').then(resposnse => resposnse.json())
    //     .then(data=> {
    //         setdata(data)
    //     })
    // } ,[])

    return(
    <div className="bg-gray-500 text-white text-center p-4 text-3xl " >
        MY GITHUB
        <div className=" flex gap-4 text-left p-4">
            <img src={data.avatar_url} alt="git pfp" width={300} />
            Username:{data.name}
            <br />
            UserIdName:{data.login}
            <br />
            Repos:{data.public_repos}
            <br />
            Gitub Followers:{data.followers}

        </div>
    </div>   
     )

}

export default GitHub;

export const GithubLoader = async () =>{


    const response= await fetch('https://api.github.com/users/Sumit4201k')

    return response.json()
}