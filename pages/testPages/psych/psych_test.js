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
