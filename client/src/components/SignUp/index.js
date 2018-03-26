import React from 'react';
import {Link} from 'react-router-dom';

const SignUp = (props)=> {
	return (
		<div className="container" style={{'backgroundImage': "url('https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg')", 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover','borderRadius': '25px', 'textAlign':'center', 'height':'700px'}}>
				<h1> Welcome to CASE!</h1>
				<p />
			<div className="container" style={{'backgroundColor': 'rgb(2, 184, 117)', 'borderRadius': '25px', 'textAlign':'center', 'maxWidth' : '30rem', 'padding':'20px'}}>
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