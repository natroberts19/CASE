import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Card = (props) => {
	return(

			<div className="card border-primary mb-3" style={{"max-width" : "20rem"}}>
  				<div className="card-header"><i class="fa fa-list"></i> Advisor Summary</div>
 				 	<div className="card-body">
   						 <h4 className="card-title">Example </h4>
   						 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="https://trello.com/b/IxGcengN/career-advisor-solution-for-educators-case" className="card-link">Card link</a>
   							<a href="https://trello.com/b/IxGcengN/career-advisor-solution-for-educators-case" className="card-link">Another link</a>
  					</div>
			</div>

	);
}

export default Card;