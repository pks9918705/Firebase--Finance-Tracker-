import useLogout from "../hooks/useLogout";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles["navbar"]}>
      <h3>Finance Tracker</h3>

      <div className={styles["rightNav"]}>
        {!user && (
          <>
            <Link to="/login" className="btn" style={{ marginRight: "10px" }}>
              Login
            </Link>
            <Link to="/" className="btn">
              SignUp
            </Link>
          </>
        )}

        {user && (
          <>
            <div className={styles.greeting}>Holla {user.displayName}!</div>
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
