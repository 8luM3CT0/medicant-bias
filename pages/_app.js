//front-end
import '../styles/globals.css'
import '@material-tailwind/react/tailwind.css'
import ProgressBar from '@badrap/bar-of-progress'
import Chakra from './chakraUI'
//back-end
import Router from 'next/router'

import { useEffect, useState } from 'react'

const progress = new ProgressBar({
  size: 4,
  color: 'blue',
  className: 'z-50',
  delay: 100
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp ({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])
  if (!showChild) {
    return null
  }
  return (
    <>
      <Chakra>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
        <Component {...pageProps} />
      </Chakra>
    </>
  )
}

export default MyApp
