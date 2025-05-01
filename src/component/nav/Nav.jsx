import React, {
  useMemo 
} from 'react'
import clsx from 'clsx'
import styles from './nav.module.sass'

export default function Nav(props) {
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const { pageIndex, swiperButtonJump } = props

  const navList = useMemo(() => {
    return [{
      title: 'SEO 需求起源',
      posIndex: 2,
    }, {
      title: '優化過程',
      posIndex: 6,
    }, {
      title: '最終結果',
      posIndex: 10,
    }]
  }, [])

  return (
    <div className={styles.nav}>
      <div
        className={clsx(styles.boxBg,
          (pageIndex >= 2 && styles.boxPos1),
          (pageIndex >= 6 && styles.boxPos2),
          (pageIndex >= 10 && styles.boxPos3))}
      >
        <div className={styles.box}></div>
      </div>
      {navList.map((cur, index) => (
        <p key={`${index.toString()}`}
          className={clsx(styles.link, pageIndex===cur.posIndex && styles[`showLink${index}`])}
          onClick={() => {swiperButtonJump(cur.posIndex)}}>
          {cur.title}
        </p>
      ))}
    </div>
  )
}