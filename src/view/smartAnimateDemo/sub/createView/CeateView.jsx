import React, {
  useState 
} from 'react'
import clsx from 'clsx'
// import styles from './smartAnimateDemo.module.sass'

import img0 from 'assets/images/aboutFigma/aboutFigma01.png'
import img1 from 'assets/images/aboutFigma/aboutFigma02.png'
import img from 'assets/images/aboutFigma/smartAnimDemo.png'

import Dialog from 'component/dialog'

export default function DemoView(props) {
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const { open, setOpen } = props

  console.log('open',open)

  return (
    <div>
      <Dialog
        title={'Figma 動畫範例'}
        open={open}
        setOpen={setOpen}
      >
        111
        {/* <iframe width="1200" height="650" src="https://www.youtube.com/embed/ZnUZmuHBups?si=8sICG8gwtGRnGWLc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
      </Dialog>
    </div>
  )
}
