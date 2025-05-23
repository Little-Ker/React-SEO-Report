import React, {
  useState, useRef
} from 'react'
import clsx from 'clsx'
import styles from './speedPage.module.sass'
import {
  Swiper, SwiperSlide 
} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import {
  EffectCards 
} from 'swiper/modules'

export default function SpeedPage() {
  const swiperRef = useRef(null)

  const [isOpenTip, setIsOpenTip] = useState(false)

  const textList = [{
    title: '同樣頁面，不同時間、網路會有差異',
  },
  //  {
  //   title: '（網速、CDN 延遲 狀況都會影響）',
  // }
  ]

  const cardsList = [{
    img: '01',
  }, {
    img: '02',
  },{
    img: '03',
  },{
    img: '04',
  },{
    img: '05',
  }]

  const handleNextClick = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext(800)
      if (swiperRef?.current?.swiper?.realIndex === (cardsList.length - 1)) {
        setIsOpenTip(true)
      }
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Swiper
          speed={800} 
          ref={swiperRef}
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className={styles.cards}
        >
          {cardsList?.map((item, index) => (
            <SwiperSlide
              className={styles.slideBg}
              key={`${index.toString()}`}
              onClick={handleNextClick}
            >
              {item.img}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>{'評分網分數會起伏變動'}</p>
        <div className={styles.texts}>
          {textList.map((cur, index) => (
            <p
              key={`${index.toString()}`}
              className={clsx(styles.text)}
            >
              {cur.title}
            </p>
          ))}
          <p
            className={clsx(styles.text, styles.textTip, isOpenTip && styles.showTextTip)}
          >
            {'「跑分像抽卡 — 不是每次都 SSR」'}
          </p>
        </div>
      </div>
    </div>
  )
}
