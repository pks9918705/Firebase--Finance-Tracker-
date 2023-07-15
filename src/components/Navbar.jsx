import useLogout from "../hooks/useLogout"
import styles from './Navbar.module.css'
import { ProjectFirebase } from "../config/firebaseConf"
export default function Navbar(){
    const {logout}=useLogout()

    return (
        <nav className={styles["navbar"]}>
            <h3>Finance Tracker</h3>
            <button className='btn' onClick={logout}>Logout</button>
        </nav>
    )
}