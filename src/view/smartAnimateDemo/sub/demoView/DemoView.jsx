import React, {
  useState 
} from 'react'
import clsx from 'clsx'
// import styles from './smartAnimateDemo.module.sass'

import img0 from 'assets/images/aboutFigma/aboutFigma01.png'
import img1 from 'assets/images/aboutFigma/aboutFigma02.png'
import img from 'assets/images/aboutFigma/smartAnimDemo.png'

import video2 from 'assets/images/aboutFigma/phototype02.mp4'

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
        <iframe width="1200" height="650" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHC9EAVXqGHy8DqYbE6z7X3%2Ftest%3Fpage-id%3D1%253A6%26type%3Ddesign%26node-id%3D736-3723%26viewport%3D2584%252C1231%252C0.1%26t%3DGghGVFeTRjNc626O-1%26scaling%3Dscale-down%26starting-point-node-id%3D736%253A3723%26show-proto-sidebar%3D1%26mode%3Ddesign" allowFullScreen></iframe>
      </Dialog>
    </div>
  )
}
