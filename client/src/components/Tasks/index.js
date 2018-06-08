// ------------------------------------------------------------------------------------------------
// Tasks is a page that contains a task builder and list of to-do items for the logged in advisor.
// ------------------------------------------------------------------------------------------------

import React, {Component} from 'react';
import "./style.css";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Footer from '../Footer';
import axios from 'axios';
import TasksAPI from '../../utils/TasksAPI'
// import TaskRender from './TaskRender';
// import TaskInput from './TaskInput';

class Tasks extends Component {

// Set the initial values for task input form and task render.
	state = {
		dueDate: "",
		title: "",
		description: "",
		tasks: [],
	}

// Mount and load the existing tasks upon page entry.
	componentDidMount() {
		this.loadAllTasks();
	  }
	
	loadAllTasks = () => {
		console.log("Load All Tasks.");
		TasksAPI.getAllTasks()
		.then(res => this.setState({ tasks : [] }))
		.catch(err => console.log(err));
	};

// Handle changes to the form input fields.
	handleInputChange = event => {
		const { name, value } = event.target;
        this.setState({
            [name]: value
        });
	}

// Handle the new task form submit. Post form values.
	handleTaskSubmit = (event, formValues) => {
		console.log("Tasks, handleTaskSubmit formValues: ", formValues);
		event.preventDefault();

		axios.post("/api/todo", formValues)
			.then((results)=>{ 
			console.log("Tasks, axios post, new task results: ", results.data);

			const newState = this.state
      		newState.tasks.push(formValues);         
			console.log("Tasks array: ", formValues);

			this.setState({
				dueDate: results.data.dueDate,
				title: results.data.title,
				description: results.data.description,
				newState
			});

			this.setState({
				dueDate: "",
				title: "",
				description: ""
			});
							
			}).catch((err)=>{
				console.log(err);
			});  
	};

render() {
	return (
		<div className="container" style={{"marginLeft":"165px"}}>
			<Navbar 
				username={this.props.auth.username} 
				handleLogout={this.props.handleLogout}
			/>
			
			{/* Heading and title section below. */}
			<h2><i className="fa fa-check-square"></i> Tasks</h2><p />
				<div className="card">
					<div className="card-header">
						Task Builder
					</div>

			{/* Task input section below. Split into separate component. */}
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

			{/* Task render section below. Split into separate component. */}
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
											<button className="btn btn-primary btn-sm" aria-label="Close" onclick="">X</button> <strong>{rendertask.title}:</strong> {rendertask.description} (Due: {rendertask.dueDate})	
											<hr />
											</li>
										))}
									<li><button className="btn btn-primary btn-sm" aria-label="Close" onclick="">X</button> <strong>Ann Smith: </strong> Resume updates. (Due: 6/15/18)<hr /></li>
									<li><button className="btn btn-primary btn-sm" aria-label="Close" onclick="">X</button> <strong>Jose Garcia: </strong> Career Source training info. (Due: 6/25/18)<hr /></li>
									<li><button className="btn btn-primary btn-sm" aria-label="Close" onclick="">X</button> <strong>Milinzy Hu: </strong> Resume updates. (Due: 6/21/18)<hr /></li>
									</div> 
									) : (
									<div>
									<li><button className="btn btn-primary btn-sm" aria-label="Close" onclick="">X</button> <strong>Ann Smith: </strong> Resume updates. (Due: 6/15/18)<hr /></li>
									<li><button className="btn btn-primary btn-sm" aria-label="Close" onclick="">X</button> <strong>Jose Garcia: </strong> Career Source training info. (Due: 6/25/18)<hr /></li>
									<li><button className="btn btn-primary btn-sm" aria-label="Close" onclick="">X</button> <strong>Milinzy Hu: </strong> Resume updates. (Due: 6/21/18)<hr /></li>
									</div>
								)}
						</div>
					</div>
				</div>
			</div>
		{/* End of row. */}
		</div>
	{/* End of card body. */}
	</div>	
{/* End of card. */}
</div>	

	<Sidenav />
	<Footer />	
</div>
);
}
}

export default Tasks;