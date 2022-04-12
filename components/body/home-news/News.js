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

function News ({ id, newsName, newsAuthor }) {
  const [showNews, setShowNews] = useState(false)

  return (
    <>
      <div
        onClick={e => setShowNews(true)}
        className=' 
space-x-4 
font-robot-slab
text-xl
hover:underline
hover:animate-pulse
transform
transition
duration-300
ease-in-out
text-blue-400
cursor-pointer
'
      >
        <h1>{newsName}</h1>
      </div>
      <Modal toggler={() => setShowNews(false)} active={showNews} size='lg'>
        <div className='max-w-[340px]'>
          <ModalHeader>
            <h2 className='font-mono font-semibold text-blue-400 text-xl p-3'>
              {newsName}
            </h2>
          </ModalHeader>
          <ModalBody>
            <div
              className='
            grid 
            place-items-start 
            space-y-5  
            h-[290px] 
            max-h-[320px] 
            overflow-y-scroll 
            scrollbar-hide'
            >
              <h1
                className='
            font-google-sans 
            font-normal
            text-lg 
            text-blue-500'
              >
                {' '}
                By {''} {newsAuthor}{' '}
              </h1>
              <p className='text-base leading-relaxed text-gray-600 font-normal'>
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of
                themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. I was taught I could do everything.
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={e => setShowNews(false)}
              color='red'
              buttonType='link'
              size='regular'
              iconOnly={false}
              rounded={false}
              block={false}
              ripple='light'
              className='capitalize font-google-sans'
            >
              Close
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  )
}

export default News
