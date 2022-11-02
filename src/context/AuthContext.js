import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const signUp = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    setLoading(true);
    await setDoc(doc(db, "users", email), {
      bookmarks: [],
    }).then(() => setLoading(false));
  };

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider
      value={{
        signUp,
        logIn,
        logOut,
        user,
        email,
        setEmail,
        password,
        setPassword,
        modal,
        setModal,
        moviesData,
        setMoviesData,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
