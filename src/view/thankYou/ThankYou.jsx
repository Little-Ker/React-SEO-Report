import React from 'react'
import styles from './thankYou.module.sass'

const Home = () => {
  return (
    <div className={styles.root}>
      <p className={styles.title}>
        <span>{'Thank you for listening.'}</span>
        <span className={styles.date}>{'2025-06'}</span>
      </p>
    </div>
  )
}

export default Home
