import React from 'react';
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
    state = {
        friend: {
            id: 500,
            name: "",
            age: "",
            email: ""
        }
    };

    addFriend = (e) => {
        e.preventDefault();
      
       let newID = this.state.friend.id +1;
       this.setState({
        friend: {
            ...this.state.friend, id: newID
        }
        })
       
        axiosWithAuth()
        .post("/friends", this.state.friend)
        .then((res) => {
            // console.log("Friend data", res)
        
            console.log("Friends",res);
        })
        .catch((err) => console.log("getData error:", err));

       
    }

    handleChange = (e) => {
        this.setState({
            friend: {
                ...this.state.friend, [e.target.name]: e.target.value
            }
        })
    }
    render () {
        return (
            <form onSubmit={this.addFriend}>
                <label>Name
                <input
                 type = "text"
                 name="name"
                 value = {this.state.friend.name}
                 onChange = {this.handleChange}
                 />
                </label>
                <label>Age
                <input
                 type = "text"
                 name="age"
                 value = {this.state.friend.age}
                 onChange = {this.handleChange}
                 />
                </label>
                <label>email
                <input
                 type = "text"
                 name="email"
                 value = {this.state.friend.email}
                 onChange = {this.handleChange}
                 />
                </label>
               <button>Add Friend</button>
                
                
            </form>
        )
    }
    
};

export default AddFriend;