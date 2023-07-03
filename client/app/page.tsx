"use client"

import styles from './page.module.css'
import Login from '@/components/Login';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.hide}>Board.</h1>
      <aside className={styles.aside}>
        <h1 className={styles.brand}>Board.</h1>
      </aside>
      <Login />
    </main>
  )
}