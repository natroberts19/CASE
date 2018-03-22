import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Jumbotron = (props) => {
	return(
		
			<div className="jumbotron">
					<h1 className="display-3"> <strong><i className="fa fa-puzzle-piece"></i>  Welcome to CASE!</strong></h1>
						<p className="lead">Career Advisor Solution for Educators (CASE) is a full-stack, case management web application that will allow you to create, update, and view student information and progress.</p>
					<hr className="my-4" />
						<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
					<p className="lead">
						<a className="btn btn-primary btn-lg" href="https://trello.com/b/IxGcengN/career-advisor-solution-for-educators-case" role="button">Learn more</a>
					</p>
			</div>
		
	);
}

export default Jumbotron;