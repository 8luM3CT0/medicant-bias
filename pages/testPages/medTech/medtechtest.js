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
import { medtech } from '../../api/questions/index'

function MedTechTest () {
  console.log('Questions test', medtech?.[0]?.questions?.[0]?.answerOptions)

  return (
    <>
      <div
        className='
        bg-bb-lake 
    overflow-hidden 
    h-screen 
    bg-cover 
    bg-center 
    bg-no-repeat'
      >
        <Head>
          <title>Exam here</title>
        </Head>
        {medtech &&
          medtech.map(data => <TestHeader title={data?.questionnaireType} />)}
        <main
          className='
            max-w-6xl 
            mx-auto
            h-screen 
            bg-gradient-to-b
            from-gray-800
            to-sky-600
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-slate-600
            scrollbar-thumb-sky-300
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
          <div
            className='
          bg-slate-700 
          p-14 
          mx-3 
          rounded-xl 
          grid 
          place-items-start'
          >
            <div
              className='
            flex 
            flex-col 
            place-items-start 
            px-3 
            w-full'
            >
              <h4
                className='
              my-7 
              text-xl 
              text-sky-300 
              font-normal 
              font-google-sans
              underline
              '
              >
                Q. 1 of 5
              </h4>
              <div
                className='
              mt-4 
              text-2xl 
              text-blue-100 
              font-google-sans 
              font-light'
              >
                {medtech?.[0]?.questions?.[0]?.question}
              </div>
            </div>
            <div className='flex flex-col w-full my-3'>
              {medtech?.[0]?.questions?.[0]?.answerOptions &&
                medtech?.[0]?.questions?.[0]?.answerOptions.map(data => (
                  <div
                    key={data?.answer}
                    className='
                flex
                items-center
                w-full
                py-4
                px-5
                m-2
                space-x-2
                border-2
                cursor-pointer
                bg-slate-600
                border-sky-600
                rounded-3xl
                '
                  >
                    <input type='radio' className='w-6 h-6 bg-slate-800' />
                    <p className='mx-5 text-white'>{data?.answer}</p>
                  </div>
                ))}
            </div>
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
