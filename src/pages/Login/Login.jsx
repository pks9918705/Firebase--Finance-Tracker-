 import React, { useState } from "react";
import styles from "./Login.module.css";
import useLogin from "../../hooks/useLogin";


export default function Login() {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const { error, isPending, login} = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    login(email, password )
    
  };

  return (
    <div className={styles["outer-card"]}>
      <div className={styles.card}>
        <h1>LogIn</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter Email"
            className={styles["input-box"]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter Password"
            className={styles["input-box"]}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {!isPending && <button className="btn">Login</button>}
          {isPending && <button className="btn" disabled>Loading..</button>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}
