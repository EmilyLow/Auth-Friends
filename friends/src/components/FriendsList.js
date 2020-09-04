

import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import AddFriend from "./AddFriend";

//Need loading still maybe

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    
    }

    //This is not the best way to accomplish list updating without refreshing
    componentDidUpdate() {
        this.getData();
    }

    getData = () => {

        //Call axiosWithAuth to get actual friends data and then set it to state

        axiosWithAuth()
            .get("/friends")
            .then((res) => {
                // console.log("Friend data", res)
                this.setState({
                    ...this.state,
                    friends: res.data
                })
                console.log("Friends",this.state.friends);
            })
            .catch((err) => console.log("getData error:", err));

    };

   
    render () {
        return (
          <div >

            <h1>Friends List</h1>
            {this.state.friends.map(friend => (
                <Friend friendData={friend}/>
            ))}
            <h1>Add Friend</h1>
                <AddFriend/>
          </div>
        )
    }
    
};

export default FriendsList;