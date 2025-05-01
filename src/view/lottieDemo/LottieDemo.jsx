// import React, {
//   useState 
// } from 'react'
// import clsx from 'clsx'
// import styles from './lottieDemo.module.sass'

// import img0 from 'assets/images/aboutFigma/aboutFigma01.png'
// import img1 from 'assets/images/aboutFigma/aboutFigma02.webp'
// import img2 from 'assets/images/aboutFigma/aboutFigma03.gif'

// import Pancakes from 'component/lottie/pancakes'
// import Hello from 'component/lottie/hello'
// import Moon from 'component/lottie/moon'

// export default function LottieDemo() {
//   const [showIndex, setShowIndex] = useState(0)

//   const imgList = [img0, img1, img2]

//   const textList = ['按鈕播放動畫', '卷軸撥放動畫']

//   return (
//     <div className={styles.root}>
//       <div className={styles.img}>
//         <div className={clsx(styles.anim, 0 === showIndex && styles.showImg)}>
//           <Moon />
//         </div>
//         <div id={'hello'} className={clsx(styles.anim, 1 === showIndex && styles.showImg)}>
//           <Hello />
//           <div className={styles.heightContainer} />
//         </div>


//         {/* {imgList.map((cur, index) => (
//           <img
//             key={`${index.toString()}`}
//             className={clsx(styles.imgDecorate, index === showIndex && styles.showImg)}
//             src={cur} alt="" />
//         ))}  */}
//       </div>
//       <div className={styles.textBox}>
//         <p className={styles.title}>{'在網頁使用 Lottie'}</p>
//         <div className={styles.texts}>
//           {textList.map((cur, index) => (
//             <p
//               key={`${index.toString()}`}
//               className={clsx(styles.text, index === showIndex && styles.showTextDecorate)}
//               onClick={() => setShowIndex(index)}
//             >
//               {cur}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


import React, {
  useState 
} from 'react'
import clsx from 'clsx'
import styles from './lottieDemo.module.sass'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import img from 'assets/images/figmaAnim/lottieFiles.png'

import video2 from 'assets/images/aboutFigma/phototype02.mp4'

import Pancakes from 'component/lottie/pancakes'
import Hello from 'component/lottie/hello'
import Moon from 'component/lottie/moon'


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



// import DemoView from './sub/demoView/DemoView'

export default function LottieDemo() {
  const [showIndex, setShowIndex] = useState(0)

  // const imgList = [img0, img1, img2]
  const [isOpenDemo, setIsOpenDemo] = useState(false)
  
  const textList = [
    {title: '萬個動畫資源'},
    {title: '簡易創建編輯動畫'},
  ]

  const swiperAry = [{view: <Moon />},{view: <Pancakes />}, {view: <Hello />,
    id: 'hello'}]

  return (
    <div className={styles.root}>
      <p className={styles.title}>{'在網頁使用 Lottie'}</p>
      {/* <div className={styles.lottie}>
        <div className={styles.pancake}>
          <Pancakes />
        </div>
        
        <div className={styles.container}>
          <div className={clsx(styles.anim, styles.left)}>
            <Moon />
          </div>
          <div id={'hello'} className={clsx(styles.anim, styles.right)}>
            <Hello />
            <div className={styles.heightContainer} />
          </div>
        </div>
      </div> */}
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
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideBg}>
            <Moon />
          </div>  
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideBg} style={{overflow: 'hidden'}}>
            <Pancakes />
          </div>  
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideBg}>
            <div id={'hello'} className={styles.anim}>
              <Hello />
              <div className={styles.heightContainer} /> 
            </div>
          </div>  
        </SwiperSlide>
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
