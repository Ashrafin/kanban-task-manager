import React from 'react';
import moment from 'moment';
import { Collapse, CardContent, CardActions, Typography, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/EditRounded';
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import PreviousIcon from '@material-ui/icons/NavigateBeforeRounded';
import NextIcon from '@material-ui/icons/NavigateNextRounded';
import './TaskBody.css';

export default ( props ) => {
	const dateFormated = moment(props.date).format('MM/DD/YYYY [at] h:mm A');

	return (
		<Collapse
			in={ props.isExpanded }
			timeout="auto"
			unmountOnExit
		>
			<CardContent
				className="expand-content"
			>
				<div
					className="tag-container"
				>
					<p
						className="tag"
					>
						Message
					</p>
				</div>
				<Typography
					component="p"
					className="task-message"
				>
					{ props.message }
				</Typography>
				<div
					className="tag-container"
				>
					<p
						className="tag"
					>
						Due Date
					</p>
				</div>
				<Typography
					component="p"
					className="task-date"
				>
					{ dateFormated }
				</Typography>
				<div
					className="tag-container"
				>
					<p
						className="tag"
					>
						Actions
					</p>
				</div>
			</CardContent>
			<CardActions
				className="actions-container"
			>
				{ props.columnIndex > 0
					? <Fab
							className="left-button"
							onClick={ () => props.moveTask(props.columnIndex, props.taskIndex, props.columnIndex - 1) }
						>
							<PreviousIcon
								className="icon"
							/>
						</Fab>
					: null
				}
				{ props.columnIndex < 2
					? <Fab
							className="edit-button"
							onClick={ props.openModal }
						>
							<EditIcon
								className="icon"
							/>
						</Fab>
					: null
				}
				<Fab
					className="delete-button"
					onClick={ props.removeTask }
				>
					<DeleteIcon
						className="icon"
					/>
				</Fab>
				{ props.columnIndex < 2
					? <Fab
							className="right-button"
							onClick={ () => props.moveTask(props.columnIndex, props.taskIndex, props.columnIndex + 1) }
						>
							<NextIcon
								className="icon"
							/>
						</Fab>
					: null
				}
			</CardActions>
		</Collapse>
	);
};
