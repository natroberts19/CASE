import React from 'react';
import {Link} from 'react-router-dom';

const SignUp = (props)=> {
	return (
		<div className="container" style={{'backgroundColor': 'rgb(2, 184, 117)'}}>
			<h1><i className="fa fa-magic"></i>  Create Advisor Account</h1>
			<p />
			<form>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<p />
				<input name='password' type='password' placeholder = 'password' value = {props.password} onChange = {props.handleChange} />
				<p />
				<button type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Sign Up</button>
			</form>
			<p />
			<Link to = "/">Go to sign in</Link>
		</div>
	);
}

export default SignUp;