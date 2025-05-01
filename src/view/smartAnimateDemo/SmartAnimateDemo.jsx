import React, {
  useState 
} from 'react'
import clsx from 'clsx'
import styles from './smartAnimateDemo.module.sass'

import img0 from 'assets/images/aboutFigma/aboutFigma01.png'
import img1 from 'assets/images/aboutFigma/aboutFigma02.png'
import img from 'assets/images/aboutFigma/smartAnimDemo.png'

import video2 from 'assets/images/aboutFigma/phototype02.mp4'

import DemoView from './sub/demoView/DemoView'
import CeateView from './sub/createView/CeateView'

export default function SmartAnimateDemo() {
  const [showIndex, setShowIndex] = useState(0)

  // const imgList = [img0, img1, img2]
  const [isOpenDemo, setIsOpenDemo] = useState(false)
  const [isOpenDemo2, setIsOpenDemo2] = useState(false)
  
  const textList = [{
    title: '範例',
    fn: () => setIsOpenDemo(true),
  },{
    title: '實作',
    fn: () => setIsOpenDemo2(true),
  }]



  return (
    <div className={styles.root}>
      <DemoView open={isOpenDemo} setOpen={setIsOpenDemo} />
      <CeateView open={isOpenDemo2} setOpen={setIsOpenDemo2} />
      {/* <DemoView open={isOpenDemo} setOpen={setIsOpenDemo} /> */}
      <div className={styles.img}>
        <img
          className={styles.imgDecorate}
          src={img} alt=""
        />



        {/* {imgList.map((cur, index) => (
          <img
            key={`${index.toString()}`}
            className={clsx(styles.imgDecorate, index === showIndex && styles.showImg)}
            src={cur} alt="" />
        ))}  */}
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>{'效果展示'}</p>
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
