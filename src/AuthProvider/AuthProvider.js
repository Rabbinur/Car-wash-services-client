import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //google sign in
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //signup
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //update profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //verify email
  const verifyEMail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("carwashToken");
    return signOut(auth);
  };

  //create a observer for outside api call kore set korbe and goto manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(" inside auth state changes", currentUser);
      // setUser(currentUser);
      if (currentUser == null || currentUser.emailVerified) {
        setUser(currentUser);
      }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    updateUserProfile,
    verifyEMail,
    setLoading,
    logOut,
    providerLogin,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
