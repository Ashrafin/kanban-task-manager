import React from 'react';
import { Card } from '@material-ui/core';
import TaskHeader from '../TaskHeader/TaskHeader';
import TaskBody from '../TaskBody/TaskBody';
import EditModal from '../EditModal/EditModal';
import './Task.css';

export default ( props ) => {
	return (
		<Card
			className="task-container"
		>
			<TaskHeader
				isExpanded={ props.isExpanded }
				title={ props.title }
				toggleContent={ props.toggleContent }
			/>
			<TaskBody
				isExpanded={ props.isExpanded }
				openModal={ props.openModal }
				message={ props.message }
				date={ props.date }
				removeTask={ props.removeTask }
				columnIndex={ props.columnIndex }
				taskIndex={ props.taskIndex }
				moveTask={ props.moveTask }
			/>
			<EditModal
				isModalOpen={ props.isModalOpen }
				closeModal={ props.closeModal }
				title={ props.title }
				message={ props.message }
				date={ props.date }
				editTitleOnChange={ props.editTitleOnChange }
				editMessageOnChange={ props.editMessageOnChange }
				editDateOnChange={ props.editDateOnChange }
				updateTask={ props.updateTask }
			/>
		</Card>
	);
};
