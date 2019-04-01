import React from 'react';
import CreateableColumn from '../../containers/CreateableColumn/CreateableColumn';
import NonCreateableColumn from '../../components/NonCreateableColumn/NonCreateableColumn';

export default ({ ...props }) => {
	return props.columnType.toLowerCase() !== "completed" ?
		<CreateableColumn { ...props } /> :
		<NonCreateableColumn { ...props } />;
};
