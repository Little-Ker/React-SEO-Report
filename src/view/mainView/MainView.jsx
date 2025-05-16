import React, {
  useCallback,
  useRef,
  useMemo,
  useState,
  useEffect
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

import Nav from 'component/nav'
import Home from 'view/home'
import Directory from 'view/directory'
import AboutView from 'view/aboutView'
import AboutRequirements from 'view/aboutRequirements'
import AboutSEO from 'view/aboutSEO'
import SEOEfficacy from 'view/SEOEfficacy'
import LevelOne from 'view/levelOne'
import LevelTwo from 'view/levelTwo'
import SpeedPage from 'view/speedPage'
import Efficacy from 'view/efficacy'
import ThankYou from 'view/thankYou'

export default function App() {
  const [pageIndex, setPageIndex] = useState(0)
  const swiperRef = useRef()

  const BASE_WIDTH = 1700
  const BASE_HEIGHT = 900

  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const winWidth = window.innerWidth
      const winHeight = window.innerHeight

      const scaleX = winWidth / BASE_WIDTH
      const scaleY = winHeight / BASE_HEIGHT

      const finalScale = Math.min(scaleX, scaleY)
      setScale(finalScale)
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

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
    title: '第二階段',
    view: <LevelTwo />,
  }, {
    title: '最終結果',
    view: <AboutView title={'最終結果'} />,
    titleBg: true,
  }, {
    title: 'Speed Page',
    view: <SpeedPage />,
  }, {
    title: 'Efficacy',
    view: <Efficacy />,
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
    <div className={styles.root}>
      <div style={{
        width: `${BASE_WIDTH}px`,
        height: `${BASE_HEIGHT}px`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        background: '#444',
        color: '#fff',
        overflow: 'hidden',
      }}>
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
              {Math.abs(pageIndex - index) <= 1 ? (
                <div className={styles.view}>{cur.view}</div> // 只渲染前後一頁
              ) : (
                null
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={clsx(styles.nav,isShowNavAnim && styles.showNavAnim)}>
          <Nav
            pageIndex={pageIndex} swiperButtonJump={swiperButtonJump}
          />
        </div>
      </div>
    </div>
  )
}
