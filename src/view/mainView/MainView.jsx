import React, {
  useCallback,
  useRef,
  useMemo,
  useState 
} from 'react'
import clsx from 'clsx'

import {
  Swiper, SwiperSlide
} from 'swiper/react'
import {
  Mousewheel, EffectFade, Keyboard
} from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

import styles from './mainView.module.sass'

import logo from 'assets/images/all/figma.png'

import Nav from 'component/nav'
import Home from 'view/home'
import Directory from 'view/directory'
import AboutView from 'view/aboutView'
import AboutRequirements from 'view/aboutRequirements'
import AboutSEO from 'view/aboutSEO'
import SEOEfficacy from 'view/SEOEfficacy'
import LevelOne from 'view/levelOne'

// import SmartAnimateDemo from 'view/smartAnimateDemo'
// import ImportAnim from 'view/importAnim'
// import WhatLottie from 'view/whatLottie'
// import LottieFiles from 'view/lottieFiles'
// import LottieDemo from 'view/lottieDemo'
import ThankYou from 'view/thankYou'

export default function App() {
  const [pageIndex, setPageIndex] = useState(0)
  const swiperRef = useRef()

  const swiperButtonNext = useCallback(() => {
    swiperRef.current.slideNext()
  }, [])

  const swiperButtonJump = useCallback((pageIndex) => {
    swiperRef.current.slideTo(pageIndex)
  }, [])

  const navList = useMemo(() => [{
    title: '首頁',
    view: <Home swiperButtonNext={swiperButtonNext} />,
  }, {
    title: '目錄',
    view: <Directory />,
  }, {
    title: 'SEO 需求起源',
    view: <AboutView title={'SEO 需求起源'} />,
    titleBg: true,
  }, {
    title: '需求起源',
    view: <AboutRequirements />,
  }, {
    title: '何謂 SEO',
    view: <AboutSEO />,
  }, {
    title: '為何效能影響SEO',
    view: <SEOEfficacy />,
  }, {
    title: '優化過程',
    view: <AboutView title={'優化過程'} />,
    titleBg: true,
  }, {
    title: '第一階段',
    view: <LevelOne />,
  }, {
    title: 'Thank You',
    view: <ThankYou />,
  }], [])

  const onChangeSlide = useCallback((swiperData) => {
    if (!setPageIndex) return
    setPageIndex(swiperData?.activeIndex)
  }, [setPageIndex])

  const isShowNavAnim = useMemo(() => {
    return pageIndex > 1 && pageIndex !== (navList.length - 1)
  }, [pageIndex, navList])

  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        onSlideChange={(swiperData) => {onChangeSlide(swiperData)}}
        effect="fade"
        modules={[Mousewheel, EffectFade, Keyboard]}
        className={styles.swiper}
        onSwiper={swiper => swiperRef.current = swiper}
        keyboard={{
          enabled: true,
        }}
      >
        {navList.map((cur, index) => (
          <SwiperSlide key={`${index.toString()}`} className={clsx(styles.slide, cur?.titleBg  && styles.titleBg)}>
            {(index !== 0) && (
              <p className={styles.title}>{'官網 SEO 效能優化'}</p>
            )}
            {/* <img src={logo} className={styles.logo} alt="" /> */}
            <div className={styles.view}>{cur.view}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={clsx(styles.nav,isShowNavAnim && styles.showNavAnim)}>
        <Nav
          pageIndex={pageIndex} swiperButtonJump={swiperButtonJump}
        />
      </div>
    </>
  )
}
