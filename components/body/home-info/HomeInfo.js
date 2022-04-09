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
    max-h-[540px]
    lg:w-[380px]
    w-[290px]
    max-w-sm 
    grid 
    place-items-center 
    space-y-4 
    p-7
    cursor-pointer
    hover:opacity-80
    transform
    transition
    duration-300
    ease-in-out
    '
      ></div>
      <Modal size='lg' active={showMore} toggler={() => setShowMore(false)}>
        <ModalHeader toggler={() => setShowMore(false)}>
          <h2
            className='
          text-xl 
          font-robot-slab 
          font-normal 
          text-sky-600
          p-7
          '
          >
            Info of the day
          </h2>
        </ModalHeader>
        <ModalBody>
          <div className='p-[70px] grid place-items-center max-w-md'>
            <p className='text-base leading-relaxed text-gray-600 font-normal'>
              I always felt like I could do anything. That’s the main thing
              people are controlled by! Thoughts- their perception of
              themselves! They're slowed down by their perception of themselves.
              If you're taught you can’t do anything, you won’t do anything. I
              was taught I could do everything.
            </p>
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
