import React from 'react';
import axios from "axios";

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };
    render () {
        return (
            <p>LoginForm</p>
        )
    }
    
};

export default LoginForm;