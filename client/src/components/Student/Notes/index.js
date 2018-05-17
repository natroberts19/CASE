//---------------------------------------------------------------------------------
//The Notes component gets and displays all existing notes for a selected student.
//---------------------------------------------------------------------------------

import React from 'react';
import "./style.css";

const Notes = ({notes}) => {

	return(
		<div className="container">
			
			{notes.map(noterender => (
				<li key={noterender._id}> {noterender.note} ({noterender.date}) </li>
			))}	
		</div>
		)
	}		

export default Notes;