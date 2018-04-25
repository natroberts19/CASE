// -------------------------------------------------------
// App description area.
// This will eventually become an announcement section.
// -------------------------------------------------------
import React from 'react';
import "./style.css";

const Jumbotron = (props) => {
	return(
		
		<div className="jumbotron" style={{"marginLeft":"10px"}}>
				<h2 className="display-3"><i className="fa fa-puzzle-piece"></i>  Welcome to CASE!</h2>
					<p className="lead">Career Advisor Solution for Educators (CASE) is a case management application that will allow you to manage your student portfolio. Use CASE to create students, update student profiles, view reports, and track student progress. </p>
					<p className="lead"> No more spreadsheets and file folders!</p>
				<hr className="my-4" />
					<p>CASE is a full-stack, CRUD web application built on a MERN scaffold. Click below to get details about the business uses, design specs and technologies used to create this project.</p>
				<p className="lead">
					<a className="btn btn-primary btn-lg" href="https://github.com/natroberts19/CASE-prod" target="_blank" rel="noopener noreferrer" role="button">Learn more</a>
				</p>
		</div>
		
	);
}

export default Jumbotron;