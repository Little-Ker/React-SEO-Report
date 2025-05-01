import React, {
  useState, useRef, useEffect
} from 'react'
import clsx from 'clsx'
import styles from './whatLottie.module.sass'

import img01 from 'assets/images/figmaAnim/whatLottie01.png'
import img02 from 'assets/images/figmaAnim/whatLottie02.png'

// import Blowup from 'blowup'

import video2 from 'assets/images/aboutFigma/phototype02.mp4'

// import DemoView from './sub/demoView/DemoView'

export default function WhatLottie() {
  const [showIndex, setShowIndex] = useState(0)

  // const imgList = [img0, img1, img2]
  const [isOpenDemo, setIsOpenDemo] = useState(false)

  // const imgRef = useRef(null)

  // useEffect(() => {
  //   if (imgRef.current) {
  //     new Blowup(imgRef.current)
  //   }
  // }, [])
  
  const textList = [{
    title: '可以無失真地放大或縮小',
  },
  {title: '高質量輸出且檔案非常小'},
  {title: '可以在多平台上使用'},
  ]



  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <img
          className={styles.imgDecorate}
          src={img01} alt=""
        />
        <img
          className={clsx(styles.imgDecorate, styles.imgDecorate2)}
          src={img02} alt=""
          // ref={imgRef}
        />
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>{'什麼是 Lottie 動畫?'}</p>
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
