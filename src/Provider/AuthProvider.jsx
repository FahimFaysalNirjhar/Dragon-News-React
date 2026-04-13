import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail,
  sendEmailVerification,
} from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const UserProfile = (updatedData) => {
    updateProfile(auth.currentUser, updatedData);
  };

  const sendVerificationEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const SignedIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    SignedIn,
    loading,
    UserProfile,
    sendVerificationEmail,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
