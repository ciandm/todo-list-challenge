import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as S from './styled';
import TasksControls from '../TasksControls/index';
import TasksList from '../TasksList';
import TasksStats from '../TasksList/TasksStats';
import fakeTasks from '../../../data/fakeTasks';
import TasksForm from '../TasksForm';

function TasksContainer() {
  const [tasks, setTasks] = useState(fakeTasks);
  const [formShown, setFormShown] = useState(false);
  const [values, setValues] = useState({
    date: '',
    title: '',
  });
  const [formErrors, setFormErrors] = useState({
    date: '',
    title: '',
  });

  const handleTaskChecked = (e, id) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex(i => i.id === id);
    updatedTasks[index].task.checked = !updatedTasks[index].task.checked;
    setTasks(updatedTasks);
  };

  const handleTaskRemove = (e, id) => {
    // prevent it from bubbling up to task item
    e.stopPropagation();
    const allTasks = [...tasks];
    const updatedTasks = allTasks.filter(t => t.id !== id);
    setTasks(updatedTasks);
  };

  const handleShowForm = () => {
    setFormShown(true);
  };

  const handleHideForm = () => {
    setFormShown(false);
  };

  const handleClearFormInputs = () => {
    setValues({
      date: '',
      title: '',
    });
    setFormErrors({
      date: '',
      title: '',
    });
  };

  const handleTaskAdd = () => {
    const allTasks = [...tasks];
    const newTask = {
      id: uuidv4(),
      task: {
        checked: false,
        date: new Date(values.date),
        title: values.title,
      },
    };
    allTasks.push(newTask);
    setTasks(allTasks);
    handleClearFormInputs();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: [value],
    }));
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    let formValid = true;
    if (!values.date || values.date === '') {
      formValid = false;
      setFormErrors(prevErrors => ({
        ...prevErrors,
        date: 'Date required',
      }));
    }
    if (!values.title || values.title === '') {
      formValid = false;
      setFormErrors(prevErrors => ({
        ...prevErrors,
        title: 'Title required',
      }));
    }

    if (formValid) {
      handleTaskAdd();
    }
  };

  return (
    <S.Container>
      <TasksControls
        handleShowForm={handleShowForm}
        handleHideForm={handleHideForm}
        formShown={formShown}
      />
      <S.TasksWrapper>
        <TasksForm
          formErrors={formErrors}
          formShown={formShown}
          handleHideForm={handleHideForm}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          values={values}
        />
        <TasksList
          tasks={tasks.sort((a, b) => {
            return a.task.date - b.task.date;
          })}
          handleTaskChecked={handleTaskChecked}
          handleTaskRemove={handleTaskRemove}
        />
      </S.TasksWrapper>
      <TasksStats
        totalTasks={tasks.length}
        tasksCompleted={tasks.filter(t => t.task.checked).length}
      />
    </S.Container>
  );
}

export default TasksContainer;
