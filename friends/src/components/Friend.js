import React from "react";

function Friend(props) {
    console.log(props);
    return (
       <div classname = "FriendBox">
           <p>Name: {props.friendData.name}</p>
           <p>Age: {props.friendData.age}</p>
           <p>email: {props.friendData.email}</p>

       </div>
    )
}

export default Friend;