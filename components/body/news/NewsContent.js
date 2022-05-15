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
function NewsContent ({
  author,
  content,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
  description
}) {
  const [openNews, setOpenNews] = useState(false)

  return (
    <>
      <div
        onClick={e => setOpenNews(true)}
        className='
    lg:max-w-[890px]
    w-[810px]
    px-3 
    py-4
    bg-gray-600
    lg:max-h-[690px]
    lg:h-[410px]
    max-h-[280px]
    h-[260px]
    flex
    items-center
    justify-evenly
    space-x-3
    lg:col-span-3
    col-span-2
    cursor-pointer
    rounded-xl
    '
      >
        <div className='grid place-items-center space-y-2 shadow-lg bg-gray-800 rounded-lg p-3'>
          <h2 className='newsContentTitle'>{title}</h2>
          {author ? (
            <h3 className='newsContentAuthor'>By {author}</h3>
          ) : (
            <h3 className='newsContentAuthor'>By N/A </h3>
          )}
        </div>
        {urlToImage ? (
          <img
            src={urlToImage}
            alt=''
            className='
    lg:max-h-[470px] 
    lg:max-w-[520px]
    lg:h-[240px]
    lg:w-[400px]
    h-[210px]
    w-[310px] 
    rounded-lg
    '
          />
        ) : (
          <img
            src='https://www.heps.or.ug/sites/default/files/images/2022/05/healh%20news%202.jpg'
            alt=''
            className='
            lg:max-h-[470px] 
    lg:max-w-[520px]
    lg:h-[240px]
    lg:w-[400px]
    h-[210px]
    w-[310px] 
    rounded-lg
    '
          />
        )}
      </div>
      <Modal active={openNews} size='lg' toggler={() => setOpenNews(false)}>
        <ModalHeader toggler={() => setOpenNews(false)}>
          <p
            className='
          lg:w-[650px]
          w-[300px] 
          bg-sky-500 
          rounded-lg 
          p-3
          text-sm
          capitalize 
          font-robot-slab 
          font-bold
          text-gray-50
          '
          >
            {title}
          </p>
        </ModalHeader>
        <ModalBody>
          <div
            className='
        lg:flex 
        lg:items-center 
        grid 
        place-items-start 
        lg:max-w-[790px] 
        lg:max-h-[690px]
        lg:w-[770px]
        lg:h-[420px] 
        max-w-[310px] 
        max-h-[460px]
        bg-sky-600
        p-4
        rounded-xl
        my-4
        '
          >
            {urlToImage ? (
              <img
                src={urlToImage}
                alt=''
                className='
    lg:max-h-[420px] 
    lg:max-w-[370px]
    lg:h-[240px]
    lg:w-[350px]
    h-[170px]
    w-[270px] 
    rounded-lg
    my-4
    mx-4
    px-2
    '
              />
            ) : (
              <img
                src='https://www.heps.or.ug/sites/default/files/images/2022/05/healh%20news%202.jpg'
                alt=''
                className='
              lg:max-h-[420px] 
    lg:max-w-[370px]
    lg:h-[240px]
    lg:w-[350px]
    h-[170px]
    w-[270px] 
    rounded-lg
    my-4
    mx-4
    '
              />
            )}
            <div
              className='
          lg:max-w-[590px] 
          lg:max-h-[440px]
          lg:h-[320px] 
          max-w-[290px] 
          max-h-[170px] 
          rounded-xl 
          bg-gray-600 
          overflow-y-scroll
          scrollbar-thin
          scrollbar-track-zinc-300
          scrollbar-thumb-slate-800
          '
            >
              {description ? (
                <p className='text-lg font-normal font-robot-slab text-blue-200 lg:mx-4 mx-0'>
                  {description}
                </p>
              ) : content ? (
                <p className='text-lg font-normal font-robot-slab text-blue-200 lg:mx-4 mx-0'>
                  {content}
                </p>
              ) : (
                <p className='text-lg font-normal font-robot-slab text-blue-200 lg:mx-4 mx-0'>
                  Content is unavailable. Try checking the link below for the
                  full description
                </p>
              )}
            </div>
          </div>
          <div
            className='
            flex
            items-center
            p-3 
            m-3 
            lg:max-w-[490px]
            lg:max-h-[260px]
            max-w-[305px]
            max-h-[150px]'
          >
            {author ? (
              <h4
                className='
                font-robot-slab 
                text-lg 
                font-normal 
                text-blue-200 
                hover:border-b-2
                hover:text-blue-400
                tranform 
                transition
                duration-300
                ease-in-out
                w-[240px]
                bg-gray-600
                p-3
                mx-3
                rounded-lg
                '
              >
                By {author}
              </h4>
            ) : (
              <h4
                className='

                font-robot-slab 
                text-lg 
                font-normal 
                text-blue-200 
                hover:border-b-2
                hover:text-blue-400
                tranform 
                transition
                duration-300
                ease-in-out
                w-[240px]
                bg-gray-600
                p-3
                mx-3
                rounded-lg
                '
              >
                By N/A
              </h4>
            )}
            {url ? (
              <a
                href={url}
                className='
              font-normal 
              text-base 
              font-robot-slab 
              text-blue-200 
              p-3
              rounded-lg
              w-[240px]
              truncate
              mx-3
              bg-gray-600
              hover:bg-sky-600
              hover:text-gray-200
              transform 
              transition
              duration-300
              ease-in-out
              '
              >
                {url}
              </a>
            ) : (
              <h4
                className='
              font-normal 
              text-base 
              font-robot-slab 
              text-blue-200 
              p-3
              rounded-lg
              w-[240px]
              truncate
              mx-3
              bg-gray-600
              '
              >
                URL not available
              </h4>
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setOpenNews(false)}
            color='red'
            buttonType='filled'
            iconOnly={false}
            block={false}
            rounded={false}
            ripple='light'
            className='capitalize font-robot-slab font-normal'
          >
            <Icon name='close' />
            <p className='text-base'>Close</p>
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default NewsContent
