// ---------------------------------------------------------------------------------------------------------
// Tasks is a page that contains a task builder and list of to-do items for the logged in advisor.
// ---------------------------------------------------------------------------------------------------------

import React, {Component} from 'react';
import "./style.css";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Footer from '../Footer';
// import axios from 'axios';
import TasksAPI from '../../utils/TasksAPI'
// import TaskRender from './TaskRender';

class Tasks extends Component {

	// Set the initial values of the Task input form.
	state = {
		tasks: [],
		dueDate: "",
		title: "",
		description: ""
	}

	componentDidMount() {
		this.loadTasks();
	  }
	
	loadTasks = () => {
		console.log("Load All Tasks.");
	TasksAPI.getTasks()
		.then(res => this.setState({ tasks : res.data, dueDate : "", title : "", description : "" }))
		.catch(err => console.log(err));
	};

	// Handle changes to the input fields.
	handleInputChange = event => {
		const { name, value } = event.target;
        this.setState({
            [name]: value
        });
	}

	// Handle the new task form submit. Post form values.
	handleTaskSubmit = event => {
		event.preventDefault();
		if (this.state.title && this.state.description) {
		  TasksAPI.postTask({
			dueDate: this.state.dueDate,
			title: this.state.title,
			description: this.state.description
		  })
			.then(res => this.loadTasks())
			.catch(err => console.log(err));
		}
	  };

render() {
	return (
		<div className="container" style={{"marginLeft":"165px"}}>
			<Navbar 
				username={this.props.auth.username} 
				handleLogout={this.props.handleLogout}
			/>
			<h2><i className="fa fa-check-square"></i> Tasks</h2><p />
				<div className="card">
					<div className="card-header">
						Featured
					</div>
					<div className="card-body">
						<h5 className="card-title">Task Builder: </h5>
						<p className="card-text">Add your tasks here...</p>
							<div className="row">
								<div className="col">
									<div className="row panel-row">
										<div className="col">
											<form onSubmit={(event) => this.handleTaskSubmit(event, this.state)}>
												<fieldset>
													<div className="form-group">
														<legend><i className="fa fa-plus"></i> Add a Task</legend>
														<hr />
														<label htmlFor="duedate">Due Date:</label>
														<input className="form-control" rows="1" name="dueDate" value={this.state.dueDate} onChange={this.handleInputChange} />
														<label htmlFor="title">Title:</label>
														<input className="form-control" rows="1" name="title" value={this.state.title} onChange={this.handleInputChange}  />
														<label htmlFor="description">Description:</label>
														<input className="form-control" rows="3" name="description" value={this.state.description} onChange={this.handleInputChange} />
										
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
											<div className="container" id="taskResults"> 
											<legend><i className="fa fa-calendar-check-o"></i> Your Open Tasks</legend>
											<hr />
																						
												{/* {this.state.tasks.length ? (
													<ul>
														{this.state.tasks.map(task => {
														
															<li key={task._id}>
															<strong>
															{task.dueDate} : {task.title} : {task.description}
															</strong>
															</li>
														
														})}
													</ul> 
													) : (
													<ul><li><h3>No Results to Display</h3></li></ul>
													)} */}
													
									
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