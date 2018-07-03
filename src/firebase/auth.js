import { auth } from './firebase';

// Sign Up
const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
const doSignOut = () => auth.signOut();

// Password Reset
const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// Password Change
const doPasswordUpdate = password => auth.currentUser.updatePassword(password);

export {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doSignOut,
  doPasswordReset,
  doPasswordUpdate
};
