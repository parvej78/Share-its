import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";

const Users = () =>{
    const [savedUsers,setSavedUsers]=useState();
    const [error , setError]= useState();
    useEffect(()=>{
        const sendRequest = async() =>{
            try{
                const response = await fetch("http://localhost:5000/api/users");
                const responseData = await response.json();
                if(!response.ok){
                    throw new Error(responseData.message);
                }
                setSavedUsers(responseData.message);
            }catch(err){
                alert(err.message,()=>{
                    setError(null);
                });
                setError(err.message)
            }
        };
        sendRequest();
       },[]);
    
    const ALL_USERS = [
        {
            id:"u1",
            name:"ABC",
            pic:"https://picsum.photos/200",
            numberoflocation:5,
        },
        {
            id:"u2",
            name:"DEF",
            pic:"https://picsum.photos/200",
            numberoflocation:1,
        },
        {
            id:"u3",
            name:"RST",
            pic:"https://picsum.photos/200",
            numberoflocation:5,
        },
        {
            id:"u4",
            name:"PQR",
            pic:"https://picsum.photos/200",
            numberoflocation:5,
        },
        {
            id:"u4",
            name:"XUV",
            pic:"https://picsum.photos/200",
            numberoflocation:5,
        },
        {
            id:"u4",
            name:"Xyz",
            pic:"https://picsum.photos/200",
            numberoflocation:5,
        }
       
    ]
    return(
        <React.Fragment>
        { savedUsers && <UsersList item={savedUsers}/>};
        </React.Fragment>
    )
};

export default Users;