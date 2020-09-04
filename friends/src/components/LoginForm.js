import React from 'react';
import axios from "axios";

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    login = (e) => {
        e.preventDefault();
        console.log(this.state.credentials);

        //axios post to get token, then put in local storage

        axios
            .post("http://localhost:5000/api/login", this.state.credentials)
            .then((res) => {
                console.log("Login res", res);
                localStorage.setItem("token", res.data.payload);
                // Below line causes redirect, but I'm not cetain how it works
                this.props.history.push("/protected");
            })
            .catch((err) => console.log(err));
    }

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials, [e.target.name]: e.target.value
            }
        })
    }
    render () {
        return (
            <form onSubmit={this.login}>
                <label>Username
                <input
                 type = "text"
                 name="username"
                 value = {this.state.credentials.username}
                 onChange = {this.handleChange}
                 />
                </label>
                <label>Password
                <input
                 type = "password"
                 name="password"
                 value = {this.state.credentials.password}
                 onChange = {this.handleChange}
                 />
                </label>
                <button>Log in</button>
                
            </form>
        )
    }
    
};

export default LoginForm;