import { useState, useEffect } from "react";
import { ProjectAuth  } from "../config/firebaseConf";
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useAuthContext } from "./useAuthContext";



const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext()

  const signup = async (email, password, username) => {
    setError(null);
    setIsPending(true);

    try {
      // Signup user
      const res = await createUserWithEmailAndPassword(ProjectAuth, email , password ,username );

      if (!res.user) {
        throw new Error("Could not complete signup");
      }
      console.log("Hurray!!, User registered successfully")
      
      await updateProfile(ProjectAuth.currentUser, {
        displayName: username 
      })
      console.log(res.user.displayName)
      //  when the user is signup successfully so now dispatch an event 
      // dipatch Login action
      dispatch({ type: "LOGIN", payload: res.user })
      // Add display name to user
      //   await res.user.updateProfile({ displayName: displayName });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }

    } catch (error) {
      //   console.log(error.message);
      if (!isCancelled) {
        setError(error.message);
        setIsPending(false);
      }

    }
  };
     // Clean up function to be executed when the component is unmounted
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])
   // Empty dependency array means the effect will run only once during the component's mount.

  return { error, isPending, signup };
};

export default useSignup;
