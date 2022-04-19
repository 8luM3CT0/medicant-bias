//front-end
import Head from 'next/head'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  InfoHeader
} from '../components/'
//back-end
import { useState } from 'react'
function Info () {
  return (
    <div
      className='
    h-screen 
    bg-mm-lakes
    bg-center
    bg-no-repeat
    bg-cover
    overflow-hidden
    '
    >
      <Head>
        <title>Our encyclopedia</title>
      </Head>
      <InfoHeader />
      <main
        className='
      max-w-6xl 
      h-screen
      place-items-center
      space-y-4
      bg-neutral-200
      opacity-90 
      mx-auto
      py-3
      overflow-y-scroll
      scrollbar-hide
      pb-48
        '
      ></main>
    </div>
  )
}

export default Info
