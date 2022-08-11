import React, { useState } from "react";
import { Redirect ,useHistory } from "react-router-dom";
const axios = require('axios');


const Register = () => {

    const history = useHistory();
    const [state, setState] = useState({
        userName: "",
        password: "",
        email   : ""
    });
    const handleChange = event => {
        const value = event.target.value;

        console.log(value);
        setState({...state, [event.target.name]: value});
    };
    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER_API_CODE}subscribers/register` , {
            credential : state.userName,
            password : state.password,
            email    : state.email
        }).then(function (response) {
            console.log(response);
            history.push('/login')
        }).catch(function (error) {
                console.log(error);
        });
    };


    return(
        <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={handleSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text"
                     className="login__input" placeholder="User name" 
                     name="userName"
                     value={state.userName}
                     onChange={handleChange}    
                    />
				</div>


				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="email"
                     className="login__input" placeholder="Email" 
                     name="email"
                     value={state.email}
                     onChange={handleChange}    
                    />
				</div>


				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input
                        type="password" 
                        className="login__input" 
                        placeholder="Password" 
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                    />
				</div>
				<button className="button login__submit">
					<span className="button__text">Register</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    )
}

export default Register;