import { useState, useCallback, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

function useFirebase() {
  const [authUser, setAuthUser] = useState(firebase.auth().currentUser);
  const handleUser = user => {
    if (user) {
      setAuthUser(user);
    }
  };
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
    return () => unsubscribe();
  }, []);

  const login = useCallback(
    (email, password) =>
      firebase.auth().signInWithEmailAndPassword(email, password),
    []
  );

  const logout = useCallback(() => firebase.auth().signOut(), []);

  const signup = useCallback(
    (email, password) =>
      firebase.auth().createUserWithEmailAndPassword(email, password),
    []
  );

  return {
    authUser,
    login,
    logout,
    signup,
  };
}

export default useFirebase;
