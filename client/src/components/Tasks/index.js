// ---------------------------------------------------------------------------------------------------------
// Tasks is a page that contains a task builder and list of to-do items for the logged in advisor.
// ---------------------------------------------------------------------------------------------------------

import React, {Component} from 'react';
import "./style.css";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Footer from '../Footer';
import axios from 'axios';
import TasksAPI from '../../utils/TasksAPI'
// import TaskRender from './TaskRender';

class Tasks extends Component {

	// Set the initial values of the Task input form.
	state = {
		dueDate: "",
		title: "",
		description: "",
		tasks: [],
	}

	componentDidMount() {
		this.loadAllTasks();
	  }
	
	loadAllTasks = () => {
		console.log("Load All Tasks.");
	TasksAPI.getAllTasks()
		.then(res => this.setState({ tasks : [] }))
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
	handleTaskSubmit = (event, formValues) => {
		console.log("New task handleTaskSubmit formValues: ", formValues);
		event.preventDefault();

		axios.post("/api/todo", formValues)
					.then((results)=>{ 
							console.log("Post new task results: ", results.data);

							const newState = this.state
                newState.tasks.push(formValues);   
                
								console.log("Tasks array: ", formValues);

							this.setState({
									dueDate: results.data.dueDate,
									title: results.data.title,
									description: results.data.description,
									newState
							});
							
					}).catch((err)=>{
							console.log(err);
					});  

					this.setState({
						dueDate: "",
						title: "",
						description: ""
				});
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
						Task Builder
					</div>
					<div className="card-body">
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
											<legend><i className="fa fa-calendar-check-o"></i> Open Tasks</legend>
											<hr />
																						
												{this.state.tasks.length ? (
													<div>
														{this.state.tasks.map(rendertask => (
														
															<li key={rendertask._id}>
												
															{rendertask.dueDate} : {rendertask.title} : {rendertask.description}
															
															</li>
														
														))}
													</div> 
													) : (
													<li><h5>No Results to Display</h5></li>
													)}
													
									
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