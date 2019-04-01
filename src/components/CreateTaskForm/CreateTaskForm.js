import React from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import { InlineDateTimePicker } from 'material-ui-pickers';
import './CreateTaskForm.css';

export default ( props ) => {
	let disabled = true;
	props.currentTitle !== "" && props.currentMessage !== "" ? disabled = false : disabled = true;

	return (
		<React.Fragment>
			<FormControl
				fullWidth
				className="form-control"
			>
				<TextField
					id="outlined-title-input"
					label="Title"
					placeholder="Enter Title"
					className="title-input"
					type="text"
					name="title"
					margin="normal"
					variant="outlined"
					value={ props.currentTitle }
					onChange={ props.updateTitleOnChange }
				/>
			</FormControl>
			<FormControl
				fullWidth
				className="form-control"
			>
				<TextField
					id="outlined-message-input"
					label="Message"
					placeholder="Enter Message"
					multiline
					rowsMax="3"
					className="message-input"
					type="text"
					name="message"
					margin="normal"
					variant="outlined"
					value={ props.currentMessage }
					onChange={ props.updateMessageOnChange }
				/>
			</FormControl>
			<FormControl
				fullWidth
				className="form-control"
			>
				<InlineDateTimePicker
					disablePast
					openTo="year"
					variant="outlined"
					label="Due Date"
					value={ props.currentDate }
					onChange={ props.updateDateOnChange }
				/>
			</FormControl>
			<Button
				variant="contained"
				disabled={ disabled }
				className="confirm-button"
				onClick={ props.createTask }
			>
				Create
			</Button>
			<Button
				variant="contained"
				className="cancel-button"
				onClick={ props.closeTaskForm }
			>
				Cancel
			</Button>
		</React.Fragment>
	);
};
