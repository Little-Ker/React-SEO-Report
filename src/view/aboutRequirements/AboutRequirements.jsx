import React, {
  useCallback,
  useState 
} from 'react'
import clsx from 'clsx'
import styles from './aboutRequirements.module.sass'

export default function AboutRequirements() {
  const [showIndex, setShowIndex] = useState(0)

  const messages = [{
    imgText: 'R',
    user: 'R企劃',
    message: <p>有空嗎? 想討論一下官網效能優化...</p>,
  }, {
    imgText: 'R',
    user: 'R企劃',
    message: <a className={styles.link} target="_blank" href="https://pagespeed.web.dev/analysis/https-gp001-dev-website-vertexplay-com-zh-Hans/i6sfj4s3vm?form_factor=desktop" rel="noreferrer">{'VP官網效能報告書_連結'}</a>,
  }, {
    imgText: 'R',
    user: 'R企劃',
    message: <p>SEO評分手機版、電腦版效能都必須要<span className={styles.redText}>90分</span>以上</p>,
  }, {
    imgText: 'V',
    user: 'Vivi',
    message: '?!!!!',
  }]

  const onClickAddIndex = useCallback(() => {
    setShowIndex((prev) => {
      if (prev < messages.length) return prev + 1
      return prev
    })
  }, [])

  return (
    <div className={styles.root}>
      <p className={styles.title}>{'需求起源'}</p>
      <div className={styles.messageBox} onClick={onClickAddIndex}>
        <div className={styles.header}>
          {'VP官網群組'}
        </div>
        <div className={styles.content}>
          {messages.map((cur, index) => (
            <div className={clsx(styles.user, cur.user === 'Vivi' && styles.localUser, showIndex >= index && styles.show)} key={`${index.toString()}`}>
              <div className={styles.photo}>
                {cur.imgText}
              </div>
              <div className={styles.detail}>
                <div className={styles.name}>{cur.user}</div>
                <div className={clsx(styles.message)}>
                  {cur.message}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
