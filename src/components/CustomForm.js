import React, { useState } from "react";
import { Redirect ,useHistory } from "react-router-dom";

const CustomForm = () => {
    const history = useHistory();
    const [state, setState] = useState({
        userName: "",
        password: ""
    });
    const handleChange = event => {
        const value = event.target.value;
        setState({...state, [event.target.name]: value});
    }
    const handleSubmit = event => {
           console.log(state); 
           event.preventDefault();
           if(state.userName == 'admin' && state.password == 'admin'){
                localStorage.setItem('login' , true);
                console.log('sssssssssssssssss');
                history.push('/')
           }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                userName
        <input
                    type="text"
                    name="userName"
                    value={state.userName}
                    onChange={handleChange}
                />
            </label>
            <label>
            password
        <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                />
            </label>

            <input type="submit" />
        </form>
    );
}

export default CustomForm;