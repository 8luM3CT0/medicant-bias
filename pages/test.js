//front-end
import Head from 'next/head'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  QuizHeader,
  QuizCard,
  ThreeD,
  DogTest
} from '../components/'
//back-end
import { useState } from 'react'
import { nursing } from './api/questions/nursing/nursing'
import { medtech } from './api/questions/med-tech/medtech'

function TestComp () {
  console.log('med tech questionnaire >>>>>>>', medtech)
  console.log('nursing questionnaire >>>>>>>', nursing)

  //testing three.js

  //end of testing

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
        >
          <div
            className='
          max-w-6xl 
          mx-auto 
          lg:justify-evenly
          lg:flex 
          lg:items-center 
          grid 
          place-items-center
          bg-slate-600
          hover:bg-gray-800
          px-7
          py-4
          my-4
          rounded-lg
          space-x-4
          shadow-2xl
          transform
          transition
          duration-300
          ease-in-out
          '
          >
            {/**Slogan or short text */}
            <h2
              className='
            text-blue-50 
            font-robot-slab 
            italic 
            text-2xl 
            font-normal 
            max-w-[290px]
            p-3
            '
            >
              Test your knowledge by taking some of our quizzes below, all based
              off on the standard assessments given to professionals of the
              given work
            </h2>
            {/**animation */}
            <div className='lg:max-w-[490px] max-w-[300px]'>
              <DogTest />
            </div>
          </div>
          <div className='grid max-w-full space-y-4 px-3'>
            <h1
              className='
          place-self-start 
          p-2
          px-4
          text-2xl 
          font-robot-slab 
          font-normal 
          text-sky-600 
          underline
          shadow-xl
          '
            >
              Category: MedTech
            </h1>
            <div
              className='
          lg:max-h-[420px]
          max-w-6xl
          mx-auto
          lg:h-[415px]
          bg-blue-200
          rounded-lg
          p-7
          flex
          items-center
          space-x-8
          overflow-x-scroll
          scrollbar-thin
          scrollbar-thumb-slate-700
          scrollbar-track-slate-300
          '
            >
              {medtech &&
                medtech.map(testData => (
                  <QuizCard
                    id={testData?.questionnaireType}
                    title={testData?.questionnaireType}
                    meaning={testData?.meaning}
                  />
                ))}
              {medtech &&
                medtech.map(testData => (
                  <QuizCard
                    id={testData?.questionnaireType}
                    title={testData?.questionnaireType}
                    meaning={testData?.meaning}
                  />
                ))}
              {medtech &&
                medtech.map(testData => (
                  <QuizCard
                    id={testData?.questionnaireType}
                    title={testData?.questionnaireType}
                    meaning={testData?.meaning}
                  />
                ))}
              {medtech &&
                medtech.map(testData => (
                  <QuizCard
                    id={testData?.questionnaireType}
                    title={testData?.questionnaireType}
                    meaning={testData?.meaning}
                  />
                ))}
            </div>
          </div>
          <div className='px-3 grid space-y-4 max-w-full'>
            <h1
              className='
          place-self-start 
          p-2
          px-4
          text-2xl 
          font-robot-slab 
          font-normal 
          text-sky-600 
          underline
          shadow-xl
          '
            >
              Category: Nursing
            </h1>
            <div
              className='
          lg:max-h-[420px]
          max-w-6xl
          mx-auto
          lg:h-[415px]
          bg-blue-200
          rounded-lg
          p-7
          flex
          items-center
          space-x-8
          overflow-x-scroll
          scrollbar-thin
          scrollbar-thumb-slate-700
          scrollbar-track-slate-300
          '
            >
              {nursing &&
                nursing.map(testData => (
                  <QuizCard
                    id={testData?.questionnaireType}
                    title={testData?.questionnaireType}
                    meaning={testData?.meaning}
                  />
                ))}
              {nursing &&
                nursing.map(testData => (
                  <QuizCard
                    id={testData?.questionnaireType}
                    title={testData?.questionnaireType}
                    meaning={testData?.meaning}
                  />
                ))}
              {nursing &&
                nursing.map(testData => (
                  <QuizCard
                    id={testData?.questionnaireType}
                    title={testData?.questionnaireType}
                    meaning={testData?.meaning}
                  />
                ))}
              {nursing &&
                nursing.map(testData => (
                  <QuizCard
                    id={testData?.questionnaireType}
                    title={testData?.questionnaireType}
                    meaning={testData?.meaning}
                  />
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

export default TestComp
