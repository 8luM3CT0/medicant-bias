//front-end
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  News
} from '../../'
//back-end
import { useState } from 'react'
import { useRouter } from 'next/router'

function TopNews ({
  author,
  content,
  publishedAt,
  source,
  title,
  url,
  urlToImage
}) {
  const [openNews, setOpenNews] = useState(false)
  return (
    <>
      <div
        onClick={e => setOpenNews(true)}
        className='
    rounded-xl 
    lg:max-h-[410px]
    lg:h-[385px] 
    max-h-[270px]
    h-[265px]
    bg-gray-800
    max-w-xl
    px-3
    py-2
    hover:bg-gray-600
    transform
    transition
    duration-300
    ease-in-out
    grid
    place-items-start
    cursor-pointer
    font-google-sans
    '
      >
        {urlToImage ? (
          <img
            src={urlToImage}
            alt=''
            className='
    lg:max-h-[370px] 
    lg:max-w-[320px] 
    max-h-[180px] 
    max-w-[230px]
    rounded-lg
    '
          />
        ) : (
          <img
            src='https://www.heps.or.ug/sites/default/files/images/2022/05/healh%20news%202.jpg'
            alt=''
            className='
    lg:max-h-[370px] 
    lg:max-w-[320px] 
    max-h-[180px] 
    max-w-[230px]
    rounded-lg
    '
          />
        )}
        <h2 className='font-semibold text-lg text-sky-100 max-w-[190px] truncate'>
          {title}
        </h2>
        {author ? (
          <h3 className='font-normal text-base text-sky-200'>{author}</h3>
        ) : (
          <h3 className='font-normal text-base text-sky-200'>N/A author</h3>
        )}
      </div>
      <Modal
        size='regular'
        active={openNews}
        toggler={() => setOpenNews(false)}
      >
        <div className='px-8 py-3 mb-4 bg-gray-600 rounded-lg'>
          <ModalHeader toggler={() => setOpenNews(false)}>
            <p className='font-robot-slab lg:text-4xl text-xl font-normal text-sky-100 w-[290px]'>
              {title}
            </p>
          </ModalHeader>
        </div>
        <div
          className='
        bg-slate-600 
        grid 
        place-items-start 
        px-3 
        py-2
        p-14 
        my-4
        rounded-lg
        overflow-y-scroll
        scrollbar-thin
        scrollbar-track-slate-300
        scrollbar-thumb-slate-700
        '
        >
          <ModalBody>
            {urlToImage ? (
              <img
                src={urlToImage}
                alt=''
                className='
    lg:max-h-[370px] 
    lg:max-w-[360px]
    lg:h-[240px]
    lg:w-[350px]
    max-h-[200px]
    max-w-[240px]
    h-[190px]
    w-[220px] 
    rounded-lg
    my-3
    '
              />
            ) : (
              <img
                src='https://www.heps.or.ug/sites/default/files/images/2022/05/healh%20news%202.jpg'
                alt=''
                className='
                lg:max-h-[370px] 
    lg:max-w-[360px]
    lg:h-[240px]
    lg:w-[350px]
    max-h-[200px]
    max-w-[240px]
    h-[190px]
    w-[220px] 
    rounded-lg
    my-3
    '
              />
            )}
            {content ? (
              <div
                className='
            lg:max-h-[390px] 
            max-w-[350px]
            lg:h-[360px]
            max-h-[200px]
            h-[195px]
            overflow-y-scroll
            scrollbar-thin
            bg-slate-800
            p-4
            rounded-lg
            scrollbar-track-sky-200
            scrollbar-thumb-gray-800
            '
              >
                <h2 className='font-robot-slab text-lg text-sky-200 font-normal'>
                  {content}
                </h2>
              </div>
            ) : (
              <div
                className='
            lg:max-h-[390px] 
            max-w-[350px]
            lg:h-[360px]
            max-h-[200px]
            h-[195px]
            overflow-y-scroll
            scrollbar-thin
            bg-slate-800
            p-4
            rounded-lg
            scrollbar-track-sky-200
            scrollbar-thumb-gray-800
            '
              >
                <h2 className='font-robot-slab text-lg text-sky-200 font-normal'>
                  Content is unavailable. Try checking for the link below.
                </h2>
              </div>
            )}
            <div
              className='
              grid 
              place-items-start 
              px-3 
              py-4 
              space-y-2 
              font-robot-slab
              max-w-[250px]
              '
            >
              <h2 className='text-lg font-normal text-sky-200'>Source:</h2>
              <a
                href={source}
                className='
              text-base 
              font-light 
              bg-gray-800
              p-3
              rounded-lg
              text-sky-400 
              hover:text-sky-200
              transform
              transition
              duration-300
              ease-in-out
              max-w-[230px]
              truncate
              '
              >
                {source}
              </a>
            </div>
          </ModalBody>
        </div>
        <ModalFooter>
          <Button
            onClick={e => setOpenNews(false)}
            color='red'
            buttonType='filled'
            rounded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='font-google-sans capitalize font-normal rounded-lg'
          >
            <Icon name='close_fullscreen' />
            <p className='text-lg'>Close</p>
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default TopNews
