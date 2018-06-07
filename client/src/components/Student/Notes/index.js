//---------------------------------------------------------------------------------
//The Notes component maps over and renders all existing notes for a selected student.
//---------------------------------------------------------------------------------

import React from 'react';
import "./style.css";

const Notes = ({notes}) => {

	return(
		<div className="container">
			{notes.map(noterender => (
				<li key={noterender._id}> 
				<strong> {noterender.note} </strong> ({noterender.date}) 
				</li>	
			))}	
		</div>
	)
}		

export default Notes;