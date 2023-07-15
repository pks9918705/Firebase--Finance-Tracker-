import React, { useState } from "react";
import styles from "./Signup.module.css";
import useSignup from "../../hooks/useSignup";


export default function Signup() {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { error, isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    signup(email, password, displayName)
    
  };

  return (
    <div className={styles["outer-card"]}>
      <div className={styles.card}>
        <h1>Sign Up</h1>
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
          <input
            placeholder="displayName"
            className={styles["input-box"]}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          {!isPending && <button className="btn">Sign Up</button>}
          {isPending && <button className="btn" disabled>Loading..</button>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}
