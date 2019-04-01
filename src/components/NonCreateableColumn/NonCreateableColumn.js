import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import Task from '../Task/Task';

export default ( props ) => {
	let marginBot = "42px";
	props.tasks.length !== 0 ? marginBot = 0 : marginBot = "42px";

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
					style={{ marginBottom: marginBot }}
					className="card-content"
				>
					<Typography
						component="h4"
						className="list-title"
					>
						{ props.columnType }
					</Typography>
					{ props.tasks.length > 0
						? <div
								className="tasks-wrapper"
							>
								{ props.tasks.map((task, index) => {
									return <Task
										title={ task.title }
										message={ task.message }
										date={ task.date }
										isExpanded={ task.isExpanded }
										toggleContent={ () => props.toggleContent(props.columnIndex, index) }
										isModalOpen={ task.isModalOpen }
										openModal={ () => this.openModal(index) }
										closeModal={ () => this.closeModal(index) }
										editTitleOnChange={ (event) => this.editFieldOnChange(event, "title", index) }
										editMessageOnChange={ (event) => this.editFieldOnChange(event, "message", index) }
										editDateOnChange={ (event) => this.editFieldOnChange(event, "date", index) }
										updateTask={ () => this.updateTask(index) }
										removeTask={ () => props.removeTask(props.columnIndex, index) }
										moveTask={ props.moveTask }
										columnIndex={ props.columnIndex }
										taskIndex={ index }
										key={ index}
									/>
								})}
							</div>
						: null
					}
				</CardContent>
			</Card>
		</Grid>
	);
};
