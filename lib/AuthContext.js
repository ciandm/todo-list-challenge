import { useEffect, useState, createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import initFirebase from './firebase';

initFirebase();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({
    loading: true,
    user: null,
  });

  const handleUser = user => {
    if (user) {
      setAuthUser({
        loading: false,
        user,
      });
    } else {
      setAuthUser({
        loading: false,
        user: null,
      });
    }
  };
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ authUser }}>{children}</AuthContext.Provider>
  );
};
