import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Background = (props) => {
	return(
		<div className="container" style={{'backgroundImage': "url('https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg')", 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover','borderRadius': '25px', 'textAlign':'center', 'height':'700px'}}>
			<h1> Welcome to CASE!</h1>
			<p />
		</div>
	);
}

export default Background;