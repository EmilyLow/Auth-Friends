

import React from 'react';


class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    
    }

    getData = () => {

        //Call axiosWithAuth to get actual friends data and then set it to state

    };

    render () {
        return (
            <p>FriendsList</p>
        )
    }
    
};

export default FriendsList;