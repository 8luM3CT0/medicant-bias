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

function PsychTest () {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(0)

  console.log('Questions test', psychology?.[0]?.questions)

  const handlePrevious = () => {
    const previousQuest = currentQuestion - 1
    previousQuest >= 0 && setCurrentQuestion(previousQuest)
  }

  const handleNext = () => {
    const nextQuest = currentQuestion + 1
    nextQuest < psychology?.[0]?.questions.length &&
      setCurrentQuestion(nextQuest)
  }

  const handleAnswer = answer => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByTester: answer })
    ])
    setSelectedOptions([...selectedOptions])
    console.log('Answer selected', selectedOptions)
  }

  const handleScores = () => {
    let newScore = 0
    for (let i = 0; i < psychology?.[0]?.questions.length; i++) {
      psychology?.[0]?.questions[i].answerOptions.map(
        answer =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByTester &&
          (newScore += 1)
      )
    }
    setScore(newScore)
    setShowScore(true)
  }

  return (
    <div
      className='
    bg-bb-glacier
    overflow-hidden 
    h-screen 
    bg-cover 
    bg-center 
    bg-no-repeat
    '
    >
      <Head>
        <title>Psychology short exam</title>
      </Head>
      {psychology &&
        psychology.map(data => (
          <TestHeader title={data?.questionnaireType} iconName='psychology' />
        ))}
      <main
        className='
            max-w-6xl 
            mx-auto
            h-screen 
            pb-40
            bg-gradient-to-b
            from-gray-800
            to-indigo-200
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-slate-600
            scrollbar-thumb-violet-300
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
          place-items-start
        '
        >
          {showScore ? (
            <h1
              className='
              text-3xl 
              font-semibold 
              font-robot-slab 
              text-center 
              text-sky-50'
            >
              A score of {score} out of {psychology?.[0]?.questions.length}
            </h1>
          ) : (
            <>
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
                  Q. {currentQuestion + 1} of{' '}
                  {psychology?.[0]?.questions.length}
                </h4>
                <div
                  className='
              mt-4 
              text-2xl 
              text-blue-100 
              font-google-sans 
              font-light'
                >
                  {psychology?.[0]?.questions?.[currentQuestion]?.question}
                </div>
              </div>
              <div className='flex flex-col w-full my-3'>
                {psychology?.[0]?.questions?.[0]?.answerOptions &&
                  psychology?.[0]?.questions?.[
                    currentQuestion
                  ]?.answerOptions.map(data => (
                    <div
                      key={data?.answer}
                      onClick={e => handleAnswer(data?.answer)}
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
                hover:bg-cyan-600
                hover:scale-105
                transform
                transition
                duration-[200ms]
                ease-in-out
                '
                    >
                      <input
                        type='radio'
                        name={data?.answer}
                        value={data?.answer}
                        onChange={e => handleAnswer(data?.answer)}
                        checked={
                          data?.answer ===
                          selectedOptions[currentQuestion]?.answerByTester
                        }
                        className='w-6 h-6 bg-slate-800'
                      />
                      <p className='mx-5 text-white'>{data?.answer}</p>
                    </div>
                  ))}
                <div
                  className='
                flex 
                justify-between 
                w-full 
                my-3 
                text-sky-50'
                >
                  <Button
                    onClick={handlePrevious}
                    color='indigo'
                    buttonType='text'
                    iconOnly={false}
                    rounded={false}
                    block={false}
                    ripple='light'
                    className='font-google-sans capitalize'
                  >
                    <Icon name='arrow_back_ios' />
                  </Button>
                  <Button
                    onClick={
                      currentQuestion + 1 === psychology?.[0]?.questions.length
                        ? handleScores
                        : handleNext
                    }
                    color='cyan'
                    buttonType='text'
                    iconOnly={false}
                    rounded={false}
                    block={false}
                    ripple='light'
                    className='font-google-sans capitalize'
                  >
                    {currentQuestion + 1 ===
                    psychology?.[0]?.questions.length ? (
                      <Icon name='done' />
                    ) : (
                      <Icon name='arrow_forward_ios' />
                    )}
                  </Button>
                </div>
                {/**End of the test div */}
              </div>
            </>
          )}
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
  )
}

export default PsychTest
