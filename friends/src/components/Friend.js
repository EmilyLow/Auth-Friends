import React from "react";

function Friend(props) {
    console.log(props);
    return (
       <div classname = "FriendBox" style={{border: "solid 1px black"}}>
           <p>Name: {props.friendData.name}</p>
           <p>Age: {props.friendData.age}</p>
           <p>email: {props.friendData.email}</p>

       </div>
    )
}

export default Friend;