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

function News ({
  id,
  newsName,
  newsAuthor,
  newsDescription,
  shortDescription,
  link
}) {
  const [showNews, setShowNews] = useState(false)

  return (
    <>
      <div
        onClick={e => setShowNews(true)}
        className=' 
flex 
items-center
space-x-3 
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
        <Icon name='article' />
        <h1>{newsName}</h1>
      </div>
      <Modal toggler={() => setShowNews(false)} active={showNews} size='lg'>
        <div className='max-w-[340px]'>
          <ModalHeader>
            <h2 className='font-robot-slab font-semibold text-blue-400 text-xl p-3'>
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
            max-h-[320px]'
            >
              {newsAuthor && (
                <h1
                  className='
            font-google-sans 
            font-normal
            text-xl 
            text-blue-500'
                >
                  {' '}
                  By {''} {newsAuthor}{' '}
                </h1>
              )}
              <div
                className='
              h-[230px] 
              px-3
              max-h-[260px] 
              overflow-y-scroll
               scrollbar-thin
               scrollbar-thumb-sky-600
               scrollbar-track-sky-400
               bg-gray-600'
              >
                {newsDescription ? (
                  <p
                    className='
              text-xl
              leading-relaxed 
              text-blue-100 
              font-robot-slab
              font-normal'
                  >
                    {newsDescription}
                  </p>
                ) : shortDescription ? (
                  <p
                    className='
              text-base 
              leading-relaxed 
              text-blue-100 
              font-robot-slab
              font-normal'
                  >
                    {shortDescription}
                  </p>
                ) : (
                  ' '
                )}
              </div>
              {link ? (
                <a
                  href={link}
                  className='
              cursor-pointer
              text-sm
              w-[190px]
              truncate
              overflow-ellipsis
              leading-relaxed 
              text-blue-500 
              font-robot-slab
              font-normal'
                >
                  {link}
                </a>
              ) : (
                ''
              )}
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
