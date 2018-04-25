import React from 'react';
import "./style.css";

const Card = (props) => {
	return(

			<div className="card border-primary mb-3" id="card" style={{"marginLeft":"10px"}}> 
  				<div className="card-header"><i className={props.icon}></i> {props.cardHeader} </div>
 				 	<div className="card-body">
   						 <h4 className="card-title"> {props.cardTitle} </h4>
   						 <p className="card-text"> {props.cardContent} </p>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">{props.label1} {props.list1}</li>
								<li className="list-group-item">{props.label2} {props.list2}</li>
								<li className="list-group-item">{props.label3} {props.list3}</li>
							</ul>
							
							<a href= {props.cardLink1} className="card-link" target="_blank" rel="noopener noreferrer" > {props.cardLink1Name} </a>
   							<a href= {props.cardLink2} className="card-link" target="_blank" rel="noopener noreferrer" >{props.cardLink2Name}</a>
  					</div>
			</div>

	);
}

export default Card;