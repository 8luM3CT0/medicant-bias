//front-end
import React from 'react'
import Head from 'next/head'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  TestHeader,
  DogTest
} from '../../../components'
//back-end
import { useState } from 'react'
import { psychology } from '../../api/questions/index'

function MedTechTest () {
  console.log('Questions test', psychology)

  return (
    <>
      <div
        className='
    h-screen 
    bg-gray-800 
    overflow-hidden'
      >
        <Head>
          <title>Exam here</title>
        </Head>
        {psychology &&
          psychology.map(data => (
            <TestHeader title={data?.questionnaireType} />
          ))}
        <main
          className='
            max-w-6xl 
            mx-auto
            h-screen 
            bg-gradient-to-b
            from-gray-800
            to-sky-600
            rounded-lg
            opacity-80
            '
        >
          <div
            className='
          p-[45px]
          rounded-xl  
          lg:max-w-[450px] 
          max-w-[330px]
          mx-auto
          '
          >
            <DogTest />
          </div>
        </main>
        <footer
          className='
        mobileDisplay'
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

export default MedTechTest
