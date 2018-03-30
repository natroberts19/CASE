import React from 'react';
import {Link} from 'react-router-dom';
import "./style.css";

const SignUp = (props)=> {
	return (
		<div className="container" id="signupWrap">
				<h1> Welcome to CASE!</h1>
				<p />
			<div className="container" id="signup">
				<h2><i className="fa fa-magic"></i>  Create Account</h2>
				<p />
				<form>
					<input value = {props.name} onChange = {props.handleChange} name='name' placeholder = 'First and Last Name'/>
					<p />
					<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
					<p />
					<input name='password' type='password' placeholder = 'password' value = {props.password} onChange = {props.handleChange} />
					<p />
					<button type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Sign Up</button>
				</form>
				<p />
				<Link to = "/" style={{'color': 'white'}}>Go to sign in</Link>
			</div>
		</div>
	);
}

export default SignUp;