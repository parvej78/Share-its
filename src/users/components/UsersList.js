import React from "react";

import UsersItem from "./UsersItem";
import"./UsersList.css";

const UsersList = (props) =>{
    if(props.item.length===0){
        return(
            <div className="center">
                <h2>Users Not exists</h2>
            </div>
        )
    }
    return(
        <ul className="userlist">
            {props.item.map((user)=>{
                return(
                <UsersItem 
                key={user.id}
                id={user.id}
                name= {user.name}
                pic={user.pic}
                locationcount={user.locationsid.length} 
                />
                );
            })}
        </ul>
    );
};


export default UsersList; 