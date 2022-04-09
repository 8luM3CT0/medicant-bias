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

export default function Home () {
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
      bg-gray-300
      opacity-90 
      mx-auto
      py-3
      '
        >
          <img
            src='https://media.istockphoto.com/videos/mathematics-pattern-physics-background-funky-biology-wallpaper-video-id904582334?s=640x640'
            alt=''
            className='
        md:col-span-full
        w-full
        max-w-6xl 
        rounded-xl 
        mx-auto 
        -mt-60 
        opacity-100'
          />
          <div
            className='
          h-screen 
          overflow-y-scroll 
      scrollbar-hide
          grid 
          justify-center
          space-y-4
          py-3 
          mx-auto 
          max-w-full
          opacity-100
          pb-48
          '
          >
            <div
              className='
            w-full
            max-w-full
            justify-evenly
            mx-auto 
            px-4 
            py-3
            grid 
            lg:grid-cols-2 
            grid-cols-1'
            >
              <HomeInfo />
              <HomeNews />
            </div>
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
