import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Card = (props) => {
	return(

			<div className="card border-primary mb-3" style={{"maxWidth" : "20rem"}}>
  				<div className="card-header" style={{'backgroundColor': 'rgb(2, 184, 117)'}}><i className={props.icon}></i> {props.cardHeader} </div>
 				 	<div className="card-body">
   						 <h4 className="card-title"> {props.cardTitle} </h4>
   						 <p className="card-text"> {props.cardContent} </p>
							
							<a href= {props.cardLink1} className="card-link" target="_blank" rel="noopener noreferrer" > {props.cardLink1Name} </a>
   							<a href= {props.cardLink2} className="card-link" target="_blank" rel="noopener noreferrer" >{props.cardLink2Name}</a>
  					</div>
			</div>

	);
}

export default Card;