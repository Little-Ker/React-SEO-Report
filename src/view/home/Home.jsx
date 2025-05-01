import React, {
  useCallback 
} from 'react'
import styles from './home.module.sass'

const Home = (props) => {
  // eslint-disable-next-line react/prop-types
  const { swiperButtonNext } = props

  return (
    <div className={styles.root}>
      <p className={styles.title}>
        <span>{'官網 SEO 效能優化'}</span>
        <span className={styles.subTitle}>{'心路歷程分享'}</span>
      </p>
      <div onClick={swiperButtonNext} className={styles.enterBtn}>{'Enter'}</div>
    </div>
  )
}

export default Home
