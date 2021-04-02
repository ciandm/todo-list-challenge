import { useCallback } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useRouter } from 'next/router';

function useFirebase() {
  const router = useRouter();

  const login = useCallback(
    (email, password) =>
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => router.push('/')),
    [router]
  );

  const getCurrentUser = useCallback(() => {
    return firebase.auth().currentUser;
  }, []);

  const logout = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  const signup = useCallback(
    (email, password) =>
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => router.push('/')),
    [router]
  );

  return {
    getCurrentUser,
    login,
    logout,
    signup,
  };
}

export default useFirebase;
