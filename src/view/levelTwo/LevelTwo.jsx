import React, {
  useCallback,
  useState,
  useRef
} from 'react'
import styles from './levelTwo.module.sass'
import gsap from 'gsap'
import img1 from 'assets/images/optimization/01.jpg'
import img2 from 'assets/images/aboutFigma/smartAnim.png'

import Magnifier from 'react-magnifier'

export default function LevelTwo() {
  const isMounted = useRef(false)
  const [showImg, setShowImg] = useState(img1)

  const btnText = useRef(null)

  const functionList = [{
    func: '301轉址',
    result: 'PageSpeed Insights 評分的是「最終載入後的頁面」，不管你中間有幾層轉址，它只會針對最後成功呈現的 URL下去評分',
  }]

  const textList = [
    <p key={'1'} className={styles.text}>首頁影片改用 <span className={styles.textDeco}>webm</span> 格式</p>,
    <p key={'2'} className={styles.text}>圖片全部使用 <span className={styles.textDeco}>webp</span> 格式</p>, 
    <p key={'3'} className={styles.text}>裝飾圖調小尺寸</p>,
  ]

  const onClickNextLevel = useCallback(() => {
    if (isMounted.current) return
    isMounted.current = true

    let tl = gsap.timeline()
    tl.to('#btn',{
      duration: 0,
      borderColor: '#177535',
      onComplete: () => {
        btnText.current.textContent = '容量優化 ing...'
      },
    }).to('#btnText',{
      duration: 0,
      color: '#fff',
    }).to('#btnBg',{
      duration: 2,
      width: '100%',
      ease: 'power2.out',
      onComplete: () => {
        btnText.current.textContent = '容量優化完成'
        setShowImg(img2)
      },
    }).to('#other',{
      delay: 1,
      visibility: 'visible',
    }).to('#other',{
      opacity: 1,
      duration: .3,
    })
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.img}>
          <Magnifier src={showImg} width={600} height={335} zoomFactor={2.5} className={styles.imgDecorate} mgWidth={200} mgHeight={200} />;
        </div>
        <div id={'btn'} className={styles.btn} onClick={onClickNextLevel}>
          <div id={'btnBg'} className={styles.btnBg} />
          <p id={'btnText'} ref={btnText} className={styles.btnText}>➤ 進行容量優化</p>   
        </div>
        <div id={'other'} className={styles.other}>
          <p className={styles.arrow}>⤴︎</p>
          <a className={styles.link} target="_blank" href="https://pagespeed.web.dev/analysis/https-gp001-qa1-website-vertexplay-com-en/88867vh78p?form_factor=mobile" rel="noreferrer">{'VP官網效能報告書v2_連結'}</a>
        </div>
        
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>{'第一階段：容量瘦身'}</p>
        {/* <p className={styles.text}>
          {'前後兩個 Frame 裡擁有一樣名字的元件，顏色、大小、透明度...等等數值，都會補足中間形變的效果。有相對應的動畫方式處理。'}
        </p> */}
        <div className={styles.texts}>
          {textList.map((cur, index) => cur)}
        </div>
      </div>
    </div>
  )
}
