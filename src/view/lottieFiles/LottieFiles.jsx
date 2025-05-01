import React, {
  useState 
} from 'react'
import clsx from 'clsx'
import styles from './lottieFiles.module.sass'

import img from 'assets/images/figmaAnim/lottieFiles.png'

import video2 from 'assets/images/aboutFigma/phototype02.mp4'

// import DemoView from './sub/demoView/DemoView'

export default function LottieFiles() {
  const [showIndex, setShowIndex] = useState(0)

  // const imgList = [img0, img1, img2]
  const [isOpenDemo, setIsOpenDemo] = useState(false)
  
  const textList = [
    {title: '萬個動畫資源'},
    {title: '簡易創建編輯動畫'},
  ]



  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <img
          className={styles.imgDecorate}
          src={img} alt=""
        />
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>{'套件 - LottieFiles'}</p>
        <div className={styles.texts}>
          {textList.map((cur, index) => (
            <p
              key={`${index.toString()}`}
              className={clsx(styles.text, index === showIndex && styles.showTextDecorate)}
              onClick={cur?.fn}
            >
              {cur.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
