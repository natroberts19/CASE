import React from 'react';
import "./style.css";

const SearchForm2 = (props) => {
	return(
		<div className="container">
			<div className="row panel-row">
				<div className="container" id="searchForm">
					<form>
						<fieldset>
							<div className="form-group">
								<legend><i class="fa fa-search"></i> Search</legend>
								<hr />
								<label HTMLfor="search">Enter 7-digit id:</label>
								<input 
									value = {props.studentId}
									onChange = {props.handleInputChange}
									type = "text"
									name = "studentId"
									rows = "1"
									className="form-control" 
									/>
							</div>
							<button 
								type="submit" 
								className="btn btn-primary" 
								onClick = {props.handleSearchSubmit}>
								Search
								</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SearchForm2;