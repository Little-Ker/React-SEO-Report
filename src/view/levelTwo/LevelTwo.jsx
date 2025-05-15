import React from 'react'
import clsx from 'clsx'
import styles from './levelTwo.module.sass'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ClearIcon from '@mui/icons-material/Clear'
import img1 from 'assets/images/level/img01.png'
import img2 from 'assets/images/level/img02.png'
import img3 from 'assets/images/level/img04.png'

import {
  Swiper, SwiperSlide 
} from 'swiper/react'
import {
  Mousewheel, Pagination, Navigation
} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function LevelTwo() {
  const swiperAry = [{
    img: img1,
    title: '301 轉址',
    describe: 'PageSpeed 評分的是「最終載入後的頁面」',
    'class': styles.img01,
  }, {
    img: img2,
    title: '使用者點擊前往方式',
    describe: '對SEO沒幫助',
    'class': styles.img02,
  }, {
    img: img3,
    title: '壓縮圖片至極限',
    describe: '已壓到鋸齒狀態，但分數沒明顯上升',
    'class': styles.img03,
  }]

  return (
    <div className={styles.root}>
      <p className={styles.title}>{'第二階段：各種嘗試法'}</p>
      <Swiper
        slidesPerView={1}
        modules={[Mousewheel, Pagination, Navigation]}
        onSlideChange={() => {console.log('change')}}
        className={styles.swiper}
        navigation={{
          prevEl: '#prevBtn',
          nextEl: '#nextBtn',
        }}
      >
        {swiperAry.map(item => (
          <SwiperSlide className={styles.swiperSlide} key={item.title}>
            <div className={styles.aa}>
              <img src={item.img} className={clsx(styles.img, item.class)} alt="" />
              <div className={styles.text}>
                <div className={styles.top}>
                  {item.title}
                  <ClearIcon className={styles.cross} />
                </div>
                <div className={styles.bottom}>
                  {item.describe}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <a id={'prevBtn'} className={styles.swiperButton}>
          <ArrowBackIosNewIcon className={styles.icon} fontSize='large' />
        </a>
        <a id={'nextBtn'} className={clsx(styles.swiperButton, styles.swiperNextBtn)}>
          <ArrowBackIosNewIcon className={styles.icon} fontSize='large' />
        </a>
      </Swiper>
    </div>
  )
}
