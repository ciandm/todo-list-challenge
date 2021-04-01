import {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = null;
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

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

  return {
    authUser,
    login,
    logout,
  };
}

export default useFirebase;
