import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const useFirestore = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .onSnapshot(querySnapshot => {
        const allTasks = [];
        querySnapshot.forEach(doc => {
          allTasks.push(doc.data());
        });
        setTasks(allTasks);
      });
    return () => unsubscribe();
  }, []);

  // const readData = () => {
  //   const unsubscribe = firebase
  //     .firestore()
  //     .collection('tasks')
  //     .onSnapshot(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         console.log(doc.data());
  //       });
  //     });
  // };

  return {
    loading,
    tasks,
  };
};

export default useFirestore;
