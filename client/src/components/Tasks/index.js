// ---------------------------------------------------------------------------------------------------------
// Tasks is a page that contains a task builder and list of to-do items for the logged in advisor.
// ---------------------------------------------------------------------------------------------------------

import React, {Component} from 'react';
import "./style.css";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Footer from '../Footer';

class Tasks extends Component {

render() {
	return (
		<div className="container" style={{"marginLeft":"165px"}}>
			<Navbar 
				username={this.props.auth.username} 
				handleLogout={this.props.handleLogout}
			/>
			<h2><i className="fa fa-check-square"></i> Tasks</h2><p />
				<div class="card">
					<div class="card-header">
						Featured
					</div>
					<div class="card-body">
						<h5 class="card-title">Task Builder: </h5>
						<p class="card-text">Build your own "to-do" list here...</p>
							<div className="row">
								<div className="col">
									<div className="row panel-row">
										<div className="col">
											<form onSubmit={(event) => this.props.handleTodoSubmit(event, this.state)}>
												<fieldset>
													<div className="form-group">
														<legend><i class="fa fa-plus"></i> Add a Task</legend>
														<hr />
														<label HTMLfor="duedate">Due Date:</label>
														<input className="form-control" rows="1" name="dueDate" value="ex. 04/01/2018" onChange="handleInputChange" />
														<label HTMLfor="duedate">Title:</label>
														<input className="form-control" rows="1" name="todoTitle" value="taskTitle" onChange="handleInputChange"  />
														<label HTMLfor="duedate">Description:</label>
														<input className="form-control" rows="3" name="todoNote" value="taskDescription" onChange="handleInputChange" />
										
													</div>
														<button type="submit" className="btn btn-primary" id="existingStudent">Add Task</button>
												</fieldset>
											</form>
										</div>
									</div>
								</div>

								<div className="col">
									<div className="row panel-row">
										<div className="col">
											<div className="container" id="todoResults"> 
											<legend><i class="fa fa-calendar-check-o"></i> Your Open Tasks</legend>
											<hr />

											

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
			
			<Sidenav />
          <Footer />	
		</div>
	);
}
}

export default Tasks;