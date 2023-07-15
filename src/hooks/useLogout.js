import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { getAuth, signOut } from "firebase/auth";
import { ProjectAuth,ProjectFirebase } from "../config/firebaseConf";
// const auth = getAuth();

const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)
        //sign the user out
        try {
           await signOut(ProjectAuth)
           
           //dispatch logout action

        //    first logout ho jayga uske badh context m update hoga dispatch dispatch se 
           dispatch({type:"LOGOUT"})

           setIsPending(false)
           setError(null)
        }
        catch (err) {
            console.log(err.message);
            setError(err.message)
            setIsPending(false)

        }
    }
    return {logout,error,isPending}
}

export default useLogout;