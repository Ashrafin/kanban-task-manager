import React from 'react';
import { Dialog, DialogTitle, DialogContent, Zoom, IconButton, FormControl, TextField, Grid, Button } from '@material-ui/core';
import { InlineDateTimePicker } from 'material-ui-pickers';
import CloseIcon from '@material-ui/icons/CloseRounded';
import './EditModal.css';

export default ( props ) => {
	let checkDisabled = false;
	props.title === "" || props.message === "" ? checkDisabled = true : checkDisabled = false;

	return (
		<Dialog
			open={ props.isModalOpen }
			onClose={ props.closeModal }
			fullScreen
			TransitionComponent={ Zoom }
			transitionDuration={{
				enter: 400,
				exit: 400
			}}
			disableRestoreFocus
			hideBackdrop
		>
			<DialogContent>
				<DialogTitle
					className="modal-title"
				>
					Edit Task
				</DialogTitle>
				<IconButton
					className="modal-close-button"
					onClick={ props.closeModal }
				>
					<CloseIcon />
				</IconButton>
				<Grid
					container
					justify="center"
					alignItems="flex-start"
					direction="row"
					spacing={ 16 }
				>
					<Grid
						item
						xs={ 12 }
						sm={ 6 }
						md={ 4 }
					>
						<FormControl
							fullWidth
							className="dialog-form-control"
						>
							<TextField
								id="outlined-title-input"
								required
								label="Title"
								placeholder="Enter Title"
								className="title-input"
								type="text"
								name="title"
								margin="normal"
								variant="outlined"
								value={ props.title }
								onChange={ props.editTitleOnChange }
							/>
						</FormControl>
						<FormControl
							fullWidth
							className="dialog-form-control"
						>
							<TextField
								id="outlined-message-input"
								required
								multiline
								rowsMax="3"
								label="Message"
								placeholder="Enter Message"
								className="message-input"
								type="text"
								name="message"
								margin="normal"
								variant="outlined"
								value={ props.message }
								onChange={ props.editMessageOnChange }
							/>
						</FormControl>
						<FormControl
							fullWidth
							className="dialog-form-control"
						>
							<InlineDateTimePicker
								disablePast
								openTo="year"
								variant="outlined"
								label="Due Date"
								value={ props.date }
								onChange={ props.editDateOnChange }
							/>
						</FormControl>
						<Button
							fullWidth
							className="update-button"
							disabled={ checkDisabled }
							onClick={ () => props.updateTask(props.title, props.message, props.date) }
						>
							Update Task
						</Button>
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	);
};
