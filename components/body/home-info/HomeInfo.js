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

function HomeInfo ({ id, name, description }) {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <div
        onClick={e => setShowMore(true)}
        className='
    bg-gradient-to-br
    from-gray-800
    to-blue-700
    rounded-lg
    h-[380px] 
    max-h-[440px]
    lg:w-[380px]
    w-[360px]
    max-w-lg
    flex
    flex-col
    justify-center
    p-7
    space-y-4
    cursor-pointer
    hover:opacity-80
    transform
    transition
    duration-300
    ease-in-out
    '
      >
        <p className='text-base font-robot-slab text-blue-300 font-normal'>
          Term of the day:
        </p>
        <h1 className='text-xl font-mono text-blue-100 font-semibold'>
          {name}
        </h1>
      </div>
      <Modal
        size='regular'
        active={showMore}
        toggler={() => setShowMore(false)}
      >
        <ModalHeader toggler={() => setShowMore(false)}>
          <h2
            className='
          text-xl 
          font-robot-slab 
          font-normal 
          text-sky-600
          '
          >
            Term of the day
          </h2>
        </ModalHeader>
        <ModalBody>
          <div className='p-[70px] grid place-items-center space-y-4 max-w-md'>
            <img
              src='https://www.sfn.org/-/media/Brainfacts2/Archives/Article-Images/Alzheimers-Brain.jpg'
              alt=''
              className='
          relative 
          h-[190px] 
          max-h-[210px] 
          rounded-lg 
          opactiy-95'
            />
            <h1 className='text-xl font-semibold font-google-sans text-blue-300 '>
              {name}
            </h1>
            <div
              className='
            h-[190px] 
            px-4
            py-3
            max-h-[210px] 
            overflow-y-scroll 
            scrollbar-hide 
            bg-gray-600'
            >
              <p
                className='
              text-base 
              font-google-sans 
              leading-relaxed 
              text-blue-300 
              font-semibold'
              >
                {description}
              </p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setShowMore(false)}
            color='red'
            buttonType='link'
            iconOnly={false}
            block={false}
            rounded={false}
            ripple='light'
            className='capitalize font-google-sans font-light hover:font-normal'
          >
            <Icon name='cancel' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default HomeInfo
