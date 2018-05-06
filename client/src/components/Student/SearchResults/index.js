import React from 'react';
import "./style.css";

const SearchResults = (props) => {
	return(
		<ul className = "list-group search-results">
			{props.results.map(result => (
				<li key = {result} className = "list-group-item">{result}</li>		
			))}

		</ul>
	);
}

export default SearchResults;