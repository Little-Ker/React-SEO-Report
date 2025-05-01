import React, {
  useState 
} from 'react'
import clsx from 'clsx'
import styles from './aboutSEO.module.sass'

import img from 'assets/images/aboutSEO/seo.png'

export default function AboutSEO() {
  const [showIndex, setShowIndex] = useState(-1)


  const textList = ['搜尋引擎優化', '讓網站在搜尋引擎中排名更高的方法']

  return (
    <div className={styles.root}>
      <div className={clsx(styles.img)}>
        <img
          className={clsx(styles.imgDecorate)}
          src={img} alt="" />
      </div>
      <div className={styles.textBox}>
        <div className={styles.title}>
          <p>{'何謂 SEO ?'}</p>
        </div>
        <div className={styles.texts}>
          {textList.map((cur, index) => (
            <p
              key={`${index.toString()}`}
              className={clsx(styles.text, index === showIndex && styles.showTextDecorate)}
              onClick={() => setShowIndex(index)}
            >
              {cur}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
