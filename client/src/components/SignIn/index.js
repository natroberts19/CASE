import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignIn = (props)=> {

	return (
		<div className="container" style={{'backgroundColor': 'rgb(2, 184, 117)'}}>
			<h1><i className="fa fa-user-plus"></i>  Advisor Sign In</h1>
			<p />
			<form>
				
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<p />
				
				<input name='password' type='password' placeholder = 'password' value = {props.password} onChange = {props.handleChange} />
				<p />
				<button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form>
			<p />
			<Link to = "/signup">Go to sign up</Link>
		</div>
	);

}

export default SignIn;