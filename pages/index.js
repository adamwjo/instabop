import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//Components
import { Navbar } from '../components/navbar/Navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
    
     
    </div>
    </>
  )
}
