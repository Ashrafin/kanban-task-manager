import React from 'react';
import _ from 'lodash';
import { Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import GenericColumn from './HOC/GenericColumn/GenericColumn';
import './App.css';

class App extends React.Component {
  state = {
    data: [
      {
        columnType: "Backlog",
        tasks: []
      },
      {
        columnType: "In Progress",
        tasks: []
      },
      {
        columnType: "Completed",
        tasks: []
      }
    ]
  };

  // render all the columns passing in all their corresponding data as props
  renderAllColumns = () => (
    this.state.data.map((column, index) => {
      return <GenericColumn
        createTask={ this.createTask }
        updateTask={ this.updateTask }
        removeTask={ this.removeTask }
        moveTask={ this.moveTask }
        toggleContent={ this.toggleContent }
        openModal={ this.openModal }
        closeModal={ this.closeModal }
        columnIndex={ index }
        key={ index }
        { ...column }
      />
    })
  );

  // create a task in the appropriate column
  createTask = (columnIndex, task) => {
    const { data } = _.cloneDeep(this.state);
    data[columnIndex].tasks.push(task);
    this.setState({ data });
  };

  // update a task from the appropriate column, task and field
  updateTask = (columnIndex, taskIndex, task, field, value) => {
    const { data } = _.cloneDeep(this.state);
    if (!task) data[columnIndex].tasks[taskIndex][field] = value;
    else data[columnIndex].tasks[taskIndex] = task;
    this.setState({ data });
  };

  // remove a task from the appropriate column
  removeTask = (columnIndex, taskIndex) => {
    const { data } = _.cloneDeep(this.state);
    data[columnIndex].tasks.splice(taskIndex, 1);
    this.setState({ data });
  };

  // move tasks from one column to another
  moveTask = (columnIndexFrom, taskIndex, columnIndexTo) => {
    const { data } = _.cloneDeep(this.state);
    const task = data[columnIndexFrom].tasks[taskIndex];
    data[columnIndexFrom].tasks.splice(taskIndex, 1);
    data[columnIndexTo].tasks.push(task);
    this.setState({ data });
  };

  // toggle the appropriate tasks dropdown content
  toggleContent = (columnIndex, taskIndex) => {
    const { data } = _.cloneDeep(this.state);
    const task = data[columnIndex].tasks[taskIndex];
    data[columnIndex].tasks[taskIndex].isExpanded = !task.isExpanded;
    this.setState({ data });
  };

  // open the modal for the appropriate task
  openModal = (columnIndex, taskIndex) => {
    const { data } = _.cloneDeep(this.state);
    const task = data[columnIndex].tasks[taskIndex];
    data[columnIndex].tasks[taskIndex].isModalOpen = !task.isModalOpen;
    this.setState({ data });
    return task;
  };

  // close the modal for the appropriate task
  closeModal = (columnIndex, taskIndex) => {
    const { data } = _.cloneDeep(this.state);
    data[columnIndex].tasks[taskIndex].isModalOpen = false;
    this.setState({ data });
  };

  render() {
    return (
      <Grid
        container
        className="grid-container"
      >
        <Grid
          item
          xs={ 12 }
        >
          <Grid
            container
            justify="center"
            alignItems="flex-start"
            direction="row"
            spacing={ 16 }
          >
            <MuiPickersUtilsProvider utils={ MomentUtils }>
              { this.renderAllColumns() }
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
