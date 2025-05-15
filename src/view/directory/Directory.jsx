import React, {
  useMemo 
} from 'react'
import styles from './directory.module.sass'

const Directory = () => {
  const list = useMemo(() =>{
    return [{
      title: 'SEO 需求起源',
      subTitle: ['需求起源', '何謂 SEO', '為何「效能」影響 SEO'],
    }, {
      title: '優化過程',
      subTitle: ['第一階段：分數提升', '第二階段：各種嘗試法'],
    }, {
      title: '最終結果',
      subTitle: ['評分網問題', '華麗↑ & 效能↓'],
    }]
  }, [])

  return (
    <div className={styles.root}>
      {list.map((cur, index) => (
        <div className={styles.item} key={`${index.toString()}`}>
          <p className={styles.title}>{cur.title}</p>
          <div className={styles.subItem}>
            {cur.subTitle.map((cur2, index2) =>(
              <p className={styles.subTitle} key={`${index2.toString()}`}>{cur2}</p>
            ))}
          </div>
        </div>
      ))}
      {/* <p className={styles.title}>
        <span>{'Figma'}</span>
        <span>{'動畫入門指南'}</span>
      </p>
      <div className={styles.enterBtn}>{'Enter'}</div> */}
    </div>
  )
}

export default Directory
