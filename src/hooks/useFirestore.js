import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const useFirestore = user => {
  const [userId, setUserId] = useState(user.uid || null);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [tasksLoading, setTasksLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async id => {
      firebase
        .firestore()
        .collection('users')
        .doc(id)
        .collection('tasks')
        .get()
        .then(snapshot => {
          const data = [];
          snapshot.forEach(doc => {
            data.push({
              id: doc.id,
              task: {
                checked: doc.data().checked,
                date: doc.data().date.toDate(),
                title: doc.data().title,
              },
            });
          });
          setTasks(data);
          setTasksLoading(false);
        });
    };
    fetchTasks(userId);
  }, [userId]);

  const addTask = task => {
    firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .collection('tasks')
      .add({
        checked: false,
        date: new Date(task.date),
        title: task.title,
      })
      .then(docRef => {
        setTasks(prevTasks => {
          return [
            ...prevTasks,
            {
              id: docRef.id,
              task: {
                checked: false,
                date: new Date(task.date),
                title: task.title,
              },
            },
          ];
        });
      });
  };

  const checkTask = (id, currentState) => {
    firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .collection('tasks')
      .doc(id)
      .update({
        checked: !currentState,
      })
      .then(() => {
        const allTasks = [...tasks];
        const index = tasks.findIndex(t => t.id === id);
        allTasks[index].task.checked = !currentState;
        setTasks(allTasks);
      });
  };

  const removeTask = id => {
    firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .collection('tasks')
      .doc(id)
      .delete()
      .then(() => {
        const allTasks = [...tasks];
        const filteredTasks = allTasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
      });
  };

  const removeCompletedTasks = () => {
    const completedTasks = tasks.filter(t => t.task.checked);
    const unfinishedTasks = tasks.filter(t => !t.task.checked);
    const batch = firebase.firestore().batch();
    // eslint-disable-next-line
    for (let i = 0; i < completedTasks.length; i++) {
      const taskRef = firebase
        .firestore()
        .collection('users')
        .doc(userId)
        .collection('tasks')
        .doc(completedTasks[i].id);
      batch.delete(taskRef);
    }
    batch.commit().then(() => {
      setTasks(unfinishedTasks);
    });
  };

  return {
    addTask,
    checkTask,
    removeCompletedTasks,
    removeTask,
    tasks,
    tasksLoading,
  };
};

export default useFirestore;
