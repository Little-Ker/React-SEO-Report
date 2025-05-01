import React, {
  useState 
} from 'react'
import clsx from 'clsx'
import styles from './importAnim.module.sass'

import img0 from 'assets/images/aboutFigma/aboutFigma01.png'
import img1 from 'assets/images/aboutFigma/aboutFigma02.png'
import img from 'assets/images/figmaAnim/importAnim.png'

import video2 from 'assets/images/aboutFigma/phototype02.mp4'

// import DemoView from './sub/demoView/DemoView'

export default function ImportAnim() {
  const [showIndex, setShowIndex] = useState(0)

  // const imgList = [img0, img1, img2]
  const [isOpenDemo, setIsOpenDemo] = useState(false)
  
  const textList = [{
    title: '套件 - Export to GIF/Video',
    fn: () => setIsOpenDemo(true),
  },
  {title: '螢幕錄製'},
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
        <p className={styles.title}>{'匯出動畫檔'}</p>
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
