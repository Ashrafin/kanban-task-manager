import React from 'react';
import { CardContent, Typography, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './TaskHeader.css';

export default ( props ) => {
	let transform = 'rotate(0deg)';
	props.isExpanded === true ? transform = 'rotate(180deg)' : transform = 'rotate(0deg)';

	return (
		<CardContent
			className="task-content"
		>
			<div
				className="tag-container"
			>
				<p
					className="tag"
				>
					Title
				</p>
			</div>
			<div
				className="task-title-container"
			>
				<Typography
					component="p"
					className="task-title"
				>
					{ props.title }
				</Typography>
			</div>
			<div
				className="expand-button-container"
			>
				<IconButton
					aria-expanded={ props.isExpanded }
					style={{ transform: transform }}
					className="icon-button"
					onClick={ props.toggleContent }
				>
					<ExpandMoreIcon
						className="icon"
					/>
				</IconButton>
			</div>
		</CardContent>
	);
};
