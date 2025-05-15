import React, {
  useRef
} from 'react'
import clsx from 'clsx'
import styles from './efficacy.module.sass'
import {
  Swiper, SwiperSlide 
} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

import img1 from 'assets/images/efficacy/jili.png'
import img2 from 'assets/images/efficacy/FC.png'
import img3 from 'assets/images/efficacy/PG.png'

// import required modules
import {
  EffectCards 
} from 'swiper/modules'

export default function Efficacy() {
  const swiperRef = useRef(null)

  const textList = [{
    title: '華麗視覺 VS 效能高分，必須有取捨',
  }]

  const cardsList = [{
    img: img1,
  }, {
    img: img2,
  },{
    img: img3,
  }]

  const tableData = [{
    title: 'JILI',
    webLink: 'https://jiligames.com/',
    content: '54',
    scoreLink: 'https://pagespeed.web.dev/analysis/https-jiligames-com/pcvj7pl1db?form_factor=mobile',
  }, {
    title: 'FC Slot',
    webLink: 'https://fachaigaming.com/',
    content: '63',
    scoreLink: 'https://pagespeed.web.dev/analysis/https-fachaigaming-com/5qz47x78eg?form_factor=mobile',
  }, {
    title: 'PG Slot',
    webLink: 'https://www.pgsoft.com/en/',
    content: '27',
    scoreLink: 'https://pagespeed.web.dev/analysis/https-www-pgsoft-com-en-games-home/ivurg15xlb?form_factor=mobile',
  }]

  const handleNextClick = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext(800)
    }
  }

  const getColor = (score) => {
    if (score <= 40) return styles.redScore
    if (score >= 90) return styles.greenScore
    return styles.orangeScore
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
              <img src={item.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>{'有些美，需要的代價'}</p>
        <div className={styles.texts}>
          {textList.map((cur, index) => (
            <p
              key={`${index.toString()}`}
              className={clsx(styles.text)}
            >
              {cur.title}
            </p>
          ))}
          <table border="1" className={styles.dataTable}>
            <thead>
              <tr>
                <th className={styles.rowTitle}>品牌名</th>
                <th className={styles.rowContent}>手機效能分數</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {tableData.map(cur => (
                <tr key={cur.title}>
                  <td className={styles.rowTitle}>
                    <a 
                      className={clsx(styles.link, getColor(cur.content))} target="_blank" href={cur.webLink}
                      rel="noreferrer">
                      {cur.title}
                    </a>
                  </td>
                  <td className={styles.rowContent}>
                    <a
                      className={clsx(styles.link, getColor(cur.content))} target="_blank" href={cur.scoreLink} rel="noreferrer">
                      {cur.content}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
