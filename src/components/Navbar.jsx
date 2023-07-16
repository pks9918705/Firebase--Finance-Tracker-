import useLogout from "../hooks/useLogout"
import styles from './Navbar.module.css'
// import { Link } from "react-router-dom"
 
export default function Navbar(){
    const {logout}=useLogout()

    

    return (
        <nav className={styles["navbar"]}>
            <h3>Finance Tracker</h3>
            <button className='btn' onClick={logout}>Logout</button>
            {/* <Link to="/login" className="btn">Login</Link>
            <Link to="/" className="btn">SignUp</Link> */}
            
        </nav>
    )
}