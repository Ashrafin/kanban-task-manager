import React from 'react';
import _ from 'lodash';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import CreateTaskForm from '../../components/CreateTaskForm/CreateTaskForm';
import Task from '../../components/Task/Task';
import './CreateableColumn.css';

class CreateableColumn extends React.Component {
	state = {
		createTaskButton: true,
		showForm: false,
		title: "",
		message: "",
		date: new Date()
	};

	// show the task form
	openTaskForm = () => {
		this.setState({
			createTaskButton: false,
			showForm: true
		});
	};

	// hide the task form
	closeTaskForm = () => {
		this.setState({
			createTaskButton: true,
			showForm: false,
			title: "",
			message: "",
			date: new Date()
		});
	};

	// update the title, message and date inputs for the task form
	updateFieldOnChange = (event, field) => {
		const state = _.cloneDeep(this.state);
		const value = field === "date" ? event._d : event.target.value;
		state[field] = value;
		this.setState(state);
	};

	// create a task and add that task to the appropriate column
	createTask = () => {
		const { title, message, date } = this.state;
		const task = {
			title,
			message,
			date,
			isExpanded: false,
			isModalOpen: false
		};
		this.props.createTask(this.props.columnIndex, task);
		this.setState({
			createTaskButton: true,
			showForm: false,
			title: "",
			message: "",
			date: new Date()
		});
	};

	// open the modal for the appropriate task
	openModal = (index) => {
		const task = this.props.openModal(this.props.columnIndex, index)
		this.setState({
			title: task.title,
			message: task.message,
		});
	};

	// close the modal for the appropriate task
	closeModal = (index) => {
		this.props.closeModal(this.props.columnIndex, index);
		this.setState({
			title: "",
			message: "",
			date: new Date()
		});
	};

	// edit the title, message and date inputs for the modal form
	editFieldOnChange = (event, field, index) => {
		const value = field === "date" ? event._d : event.target.value;
		this.props.updateTask(this.props.columnIndex, index, null, field, value);
	};

	// update the current task and close the modal
	updateTask = (index) => {
		this.closeModal(index);
	};

	render() {
		let buttonStyle = "create-backlog-button";
		this.props.columnType === "In Progress" ? buttonStyle = "create-inProgress-button" : buttonStyle = "create-backlog-button";

		return (
			<Grid
				item
				xs={ 12 }
				md={ 3 }
				className="column-container"
			>
				<Card
					className="card-container"
				>
					<CardContent
						className="card-content"
					>
						<Typography
							component="p"
							className="list-title"
						>
							{ this.props.columnType }
						</Typography>
						{ this.props.tasks.length > 0
							? <div
									className="tasks-wrapper"
								>
									{ !this.state.showForm && this.props.tasks.map((task, index) => {
										return 	<Task
											title={ task.title }
											message={ task.message }
											date={ task.date }
											isExpanded={ task.isExpanded }
											toggleContent={ () => this.props.toggleContent(this.props.columnIndex, index) }
											isModalOpen={ task.isModalOpen }
											openModal={ () => this.openModal(index) }
											closeModal={ () => this.closeModal(index) }
											editTitleOnChange={ (event) => this.editFieldOnChange(event, "title", index) }
											editMessageOnChange={ (event) => this.editFieldOnChange(event, "message", index) }
											editDateOnChange={ (event) => this.editFieldOnChange(event, "date", index) }
											updateTask={ () => this.updateTask(index) }
											removeTask={ () => this.props.removeTask(this.props.columnIndex, index) }
											moveTask={ this.props.moveTask }
											columnIndex={ this.props.columnIndex }
											taskIndex={ index }
											key={ index }
										/>
									}) }
								</div>
							: null
						}
					</CardContent>
					<CardActions
						className="card-actions-container"
					>
						{ this.state.createTaskButton
							? <Button
									variant="contained"
									fullWidth
									className={ buttonStyle }
									onClick={ this.openTaskForm }
								>
									Create Task
								</Button>
							: <CreateTaskForm
									currentDate={ this.state.date }
									currentTitle={ this.state.title }
									currentMessage={ this.state.message }
									updateTitleOnChange={ (event) => this.updateFieldOnChange(event, "title") }
									updateMessageOnChange={ (event) => this.updateFieldOnChange(event, "message") }
									updateDateOnChange={ (event) => this.updateFieldOnChange(event, "date") }
									createTask={ this.createTask }
									closeTaskForm={ this.closeTaskForm }
								/>
						}
					</CardActions>
				</Card>
			</Grid>
		);
	}
}

export default CreateableColumn;
