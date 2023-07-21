import React from 'react'
import styles from "./Home.module.css"
import Transaction from './Transaction'
import  {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import TransactionList from './TransactionList'

export default function Home() {

  const {user}=useAuthContext()
  // for getting the collection data
  const {documents,error}=useCollection("transactions",
  ["uid","==",user.uid],["createdAt","desc"])

  return (
    <div className={styles.container} >
      <div className={styles.content} >

        {error && <h1>ERROR</h1>}
        {documents && <TransactionList transactions={documents}/>}
       
      </div>
      <div className={styles.sidebar} >
        <Transaction uid={user.uid} />
      </div>
       
    </div>
  )
}
