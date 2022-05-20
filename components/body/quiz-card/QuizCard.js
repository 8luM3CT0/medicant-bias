//front-end
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../'
//back-end
import { useState } from 'react'
import { useRouter } from 'next/router'

function QuizCard ({ id, title, meaning }) {
  const router = useRouter()
  const [showCard, setShowCard] = useState(false)

  return (
    <>
      <div
        onClick={e => setShowCard(true)}
        className='
      lg:max-h-[320px]
      lg:h-[300px] 
      lg:max-w-[520px]
      lg:w-[500px]
      max-w-[300px]
      w-[280px]
      max-h-[210px]
      h-[200px]
      bg-gray-800
      grid
      place-items-center
      cursor-pointer
      hover:bg-gray-600
      hover:scale-105
      duration-300
      ease-in-out
      m-4
      '
      >
        <h2 className='font-robot-slab text-xl font-normal text-blue-200'>
          {title}
        </h2>
      </div>
      <Modal size='sm' active={showCard} toggler={() => setShowCard(false)}>
        <ModalHeader toggler={() => setShowCard(false)}>
          <p
            className='
          font-robot-slab 
          text-lg 
          font-normal 
          text-gray-500
          px-3
          '
          >
            Test card
          </p>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          p-20
          grid 
          place-items-start 
          space-y-4 
          bg-gray-800 
          rounded-xl'
          >
            <h2
              className='
              font-robot-slab 
              font-normal 
              text-blue-200 
              place-self-start 
              px-2
              text-2xl
              underline
              italic
              '
            >
              {title}
            </h2>
            <p className='font-robot-slab font-light text-blue-300 p-2'>
              {meaning}
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setShowCard(false)}
            color='red'
            buttonType='filled'
            size='regular'
            rounded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='capitalize font-robot-condensed text-lg'
          >
            <Icon name='blinds_closed' />
            <h4>Close</h4>
          </Button>
          <Button
            onClick={e => setShowCard(false)}
            color='green'
            buttonType='filled'
            size='regular'
            rounded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='capitalize font-robot-condensed text-lg'
          >
            <Icon name='content_paste_go' />
            <h4>Test it out</h4>
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default QuizCard
