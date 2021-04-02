import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as S from './styled';
import TasksControls from '../TasksControls/index';
import TasksList from '../TasksList';
import TasksStats from '../TasksList/TasksStats';
import TasksForm from '../TasksForm';
import useFirestore from '../../hooks/useFirestore';
import { AuthContext } from '../../../lib/AuthContext';

function TasksContainer() {
  const { authUser } = useContext(AuthContext);
  const { tasks, addTask, checkTask } = useFirestore(authUser.user);
  const [filters, setFilters] = useState({
    completed: false,
    unfinished: false,
  });
  const [formShown, setFormShown] = useState(false);
  const [values, setValues] = useState({
    date: '',
    title: '',
  });
  const [formErrors, setFormErrors] = useState({
    date: '',
    title: '',
  });

  const handleFilterToggle = name => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: !prevFilters[name],
    }));
  };

  const handleTaskChecked = (id, currentStatus) => {
    checkTask(id, currentStatus);
  };

  const handleTaskRemove = (e, id) => {
    // prevent it from bubbling up to task item
    e.stopPropagation();
    const allTasks = [...tasks];
    const updatedTasks = allTasks.filter(t => t.id !== id);
    // setTasks(updatedTasks);
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
    addTask({
      date: values.date,
      title: values.title,
    });
    handleClearFormInputs();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleRemoveCompleted = () => {
    const allTasks = [...tasks];
    const filteredTasks = allTasks.filter(t => !t.task.checked);
    setTasks(filteredTasks);
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
        filters={filters}
        handleFilterToggle={handleFilterToggle}
        handleShowForm={handleShowForm}
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
          filters={filters}
          handleTaskChecked={handleTaskChecked}
          handleTaskRemove={handleTaskRemove}
        />
      </S.TasksWrapper>
      <TasksStats
        handleRemoveCompleted={handleRemoveCompleted}
        totalTasks={tasks.length}
        tasksCompleted={tasks.filter(t => t.task.checked).length}
      />
    </S.Container>
  );
}

export default TasksContainer;
