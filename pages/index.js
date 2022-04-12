//front-end
import Head from 'next/head'
import {
  Header,
  HomeInfo,
  HomeNews,
  Button,
  Icon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from '../components'
//back-end
import { useState } from 'react'
import { news } from './api/news/news'

export default function Home () {
  console.log(news)

  return (
    <>
      <div
        className='
    h-screen 
    bg-mm-lakes
    bg-center
    bg-no-repeat
    bg-cover
    overflow-hidden'
      >
        <Head>
          <title>Medicant</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <header className='z-50 top-0 sticky'>
          <Header />
        </header>
        <main
          className='
      max-w-6xl 
      h-screen
      place-items-center
      space-y-4
      bg-gray-300
      opacity-90 
      mx-auto
      py-3
      overflow-y-scroll
      scrollbar-hide
      pb-48
      '
        >
          <img
            src='https://i2.wp.com/www.ayoungdoctorsjourney.com//wp-content/uploads/2019/06/Screen-Shot-2019-06-07-at-6.47.44-PM-1024x766.png?resize=1024%2C766'
            alt=''
            className='
        md:col-span-full
        w-full
        max-w-6xl 
        rounded-xl 
        mx-auto
        max-h-[560px] 
        -mt-60
        opacity-100'
          />
          <div
            className='
            w-full
            max-w-full
            justify-evenly
            mx-auto 
            px-4 
            py-3 
            lg:flex 
            lg:items-center
            grid
            lg:space-y-0
            space-y-4
            '
          >
            <HomeInfo />
            <HomeNews healthNews={news} />
          </div>
        </main>

        <footer className='z-50 bottom-0 sticky bg-gray-600 px-8 py-4'>
          <h1 className='font-robot-slab text-blue-400 text-xl'>
            Footer component
          </h1>
        </footer>
      </div>
    </>
  )
}
