import React from 'react'
import styles from "./Home.module.css"
import Transaction from './Transaction'
import  {useAuthContext} from '../../hooks/useAuthContext'

export default function Home() {

  const {user}=useAuthContext()
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Transaction List
      </div>
      <div className={styles.sidebar}>
        <Transaction uid={user.uid}/>
      </div>
       
    </div>
  )
}
