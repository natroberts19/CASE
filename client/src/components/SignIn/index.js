import React from 'react';
// import Background from "../Background";
import {Link} from 'react-router-dom';
import "./style.css";

const SignIn = (props)=> {

	return (
	
	<div className="container" id="signinWrap">
			<h1> Welcome to CASE!</h1>
			<p />
		
		<div className="container" id="signin">
			<h2><i className="fa fa-user-plus"></i>  Advisor Sign In</h2>
				<p />
				<form>
					<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
					<p />
					<input name='password' type='password' placeholder = 'password' value = {props.password} onChange = {props.handleChange} />
					<p />
					<button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
				</form>
				<p />
			<Link to = "/signup" style={{'color': 'white'}} >Go to sign up</Link>
		</div>
	</div>
	
	);

}

export default SignIn;