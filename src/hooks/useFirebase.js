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
        .catch(e => console.log(e)),
    []
  );

  const logout = useCallback(() => {
    firebase.auth().signOut();
    router.push('/login');
  }, [router]);

  const signup = useCallback(
    (email, password) =>
      firebase.auth().createUserWithEmailAndPassword(email, password),
    []
  );

  return {
    login,
    logout,
    signup,
  };
}

export default useFirebase;
