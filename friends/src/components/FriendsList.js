

import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";


class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
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

    //Need to add loading
    render () {
        return (
          <div>
            <p>Friends List</p>
            {this.state.friends.map(friend => (
                <p>A new friend</p>
            ))}

          </div>
        )
    }
    
};

export default FriendsList;