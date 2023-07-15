import { useState } from "react";
import { ProjectAuth,ProjectFirebase } from "../config/firebaseConf";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

 

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const {dispatch}=useAuthContext()

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // Signup user
      const res = await  createUserWithEmailAndPassword (ProjectAuth,email, password);

      if (!res.user) {
        throw new Error("Could not complete signup");
      }
console.log("Hurray!!, User registered successfully")
    //  when the user is signup successfully so now dispatch an event 
    // dipatch Login action
      dispatch({type:"LOGIN",payload:res.user})
      // Add display name to user
    //   await res.user.updateProfile({ displayName: displayName });

      setIsPending(false);
      setError(null);
    } catch (error) {
    //   console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};

export default useSignup;
