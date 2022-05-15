//front-end
import Head from 'next/head'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  QuizHeader
} from '../components/'
//back-end
import { useState } from 'react'

function TestComp () {
  return (
    <>
      <div
        className='
    bg-yosemite 
    overflow-hidden 
    h-screen 
    bg-cover 
    bg-center 
    bg-no-repeat'
      >
        <Head>
          <title>Quiz area</title>
        </Head>
        <QuizHeader />
        <main
          className='
    max-w-7xl 
    mx-auto
    bg-gray-200 
    opacity-80 
    h-screen 
    overflow-y-scroll
    scrollbar-hide
    pb-[240px]'
        ></main>
        <footer
          className='
        z-50 
        bottom-0 
        sticky 
        bg-gray-600 
        px-8 
        py-4 
        justify-between 
        flex 
        items-center'
        >
          <Button
            color='lightBlue'
            buttonType='link'
            iconOnly={false}
            block={false}
            rounded={false}
            className='
          capitalize
          hover:underline 
          font-google-sans 
          font-normal'
          >
            <h1 className='text-xl '>Looking for services ? Click here.</h1>
          </Button>
          <Button
            color='lightBlue'
            buttonType='link'
            iconOnly={false}
            block={false}
            rounded={false}
            className='
            flex
            items-center
            space-x-4
          capitalize
          font-google-sans 
          font-normal'
          >
            <Icon name='terminal' />
            <h1 className='developerTitle'>Developer</h1>
          </Button>
        </footer>
      </div>
    </>
  )
}

export default TestComp
