import initializeFirebaseApp from '../Pages/Login/Firebase/firebase.init';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';

initializeFirebaseApp();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const registerUser = (email, password, name, history) => {
    // console.log(name);
    setIsLoading(true);
    // console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setError('');
        // console.log(userCredential);

        swal('Login Successfully', `Congratulations ${name}`, 'success');
        axios
          .post('https://morning-dawn-48580.herokuapp.com/users', {
            email: email,
            name: name,
            password: password,
            uid: userCredential.user.uid,
          })
          .then((res) => {
            // console.log(res);
          })
          .catch((er) => {
            // console.log(er);
          });
        setUser(userCredential.user);
        const newUser = { email, displayName: name };
        setUser(newUser);
        // name send to the firebase

        updateProfile(auth.currentUser, {
          displayName: `${name}`,
        })
          .then((user) => {
            // Profile updated!
            // console.log('Profile updated');

            history.replace('/');

            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        // ...
      })
      .catch((error) => {
        // console.log(error);
        // Handle Errors here.
        setError(error.message);
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // update user

  // Login user
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setError('');
        setUser(userCredential.user);
        const destination = location.state?.from?.pathname || '/';
        history.replace(destination);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        setError(error.message);
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //  On auth changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        setError('');
        // ...
      } else {
        // User is signed out
        setUser({});
        setError('');
        // ...
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  //Logout user
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setError('');
        // Sign-out successful.
      })
      .catch((error) => {
        setError(error.message);
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    user,
    registerUser,
    logout,
    error,
    isLoading,
    loginUser,
  };
};
export default useFirebase;
