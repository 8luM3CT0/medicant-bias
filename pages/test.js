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
  QuizCard
} from '../components/'
//back-end
import { useState } from 'react'
import { nursing } from './api/questions/nursing/nursing'
import { medtech } from './api/questions/med-tech/medtech'

function TestComp () {
  console.log('med tech questionnaire >>>>>>>', medtech)
  console.log('nursing questionnaire >>>>>>>', nursing)
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
          <div className='max-w-6xl mx-auto grid'>
            <h1
              className='
            place-self-start 
            px-6 
            py-5 
            font-robot-condensed 
            font-semibold 
            text-blue-400
            text-2xl
            '
            >
              The quiz section
            </h1>
            {/**quiz cards */}
            <div
              className='
            max-w-6xl
            max-h-[310px]
            overflow-y-scroll
            scrollbar-thin
            scrollbar-thumb-slate-600
            scrollbar-track-slate-200
            mx-auto
            lg:flex
            lg:items-center
            grid
            grid-cols-2 
            p-4
            bg-sky-200
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
        </main>
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
