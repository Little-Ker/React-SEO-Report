import React from 'react'
import clsx from 'clsx'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import img from 'assets/images/aboutSEO/seo2.jpg'
import styles from './SEOEfficacy.module.sass'

export default function SEOEfficacy() {
  const textList = ['網站效能差', '使用者秒關', '跳出率高', 'SEO 排名下降']

  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <img
          className={clsx(styles.imgDecorate)}
          src={img} alt="" />
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>{'為何「效能」影響 SEO ?'}</p>
        <div className={styles.texts}>
          {textList.map((cur, index) => (
            <div key={`${index.toString()}`}>
              <p className={clsx(styles.text)}>
                {cur}
              </p>
              {(index < (textList.length - 1)) && (
                <ArrowDownwardIcon className={styles.icon} fontSize='large' />
              )}
            </ div>
          ))}
        </div>
      </div>
    </div>
  )
}
