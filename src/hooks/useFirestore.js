import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const useFirestore = user => {
  const [userId, setUserId] = useState(user.uid || null);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .collection('tasks')
      .orderBy('date')
      .onSnapshot(querySnapshot => {
        const allTasks = [];
        querySnapshot.forEach(doc => {
          allTasks.push({
            id: doc.id,
            task: {
              checked: doc.data().checked,
              date: new Date(doc.data().date.seconds),
              title: doc.data().title,
            },
          });
        });
        setTasks(allTasks);
        setLoading(false);
      });
    return () => unsubscribe();
  }, [userId]);

  return {
    loading,
    tasks,
  };
};

export default useFirestore;
