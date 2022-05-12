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
        {urlToImage ? (
          <img
            src={urlToImage}
            alt=''
            className='
    lg:max-h-[370px] 
    lg:max-w-[320px]
    lg:h-[240px]
    lg:w-[350px]
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
    lg:max-h-[370px] 
    lg:max-w-[300px] 
    max-h-[180px] 
    max-w-[230px]
    rounded-lg
    '
          />
        )}
        <div className='grid place-items-center space-y-2'>
          <h2 className='newsContentTitle'>{title}</h2>
          {author ? (
            <h3 className='newsContentAuthor'>By {author}</h3>
          ) : (
            <h3 className='newsContentAuthor'>By N/A </h3>
          )}
        </div>
        <div className='newsContentText'>
          <p className='text-cyan-600 font-google-sans font-normal'>
            {content}
          </p>
        </div>
      </div>
      <Modal active={openNews} size='lg' toggler={() => setOpenNews(false)}>
        <ModalHeader toggler={() => setOpenNews(false)}>
          <p
            className='
          w-[200px] 
          bg-sky-500 
          rounded-lg 
          p-3
          capitalize 
          font-robot-slab 
          font-normal'
          >
            News
          </p>
        </ModalHeader>
        <div
          className='
        lg:flex 
        lg:items-center 
        grid 
        place-items-start 
        lg:max-w-[690px] 
        lg:max-h-[490px] 
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
          lg:max-h-[240px] 
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
            <p className='text-lg font-normal font-robot-slab text-blue-200 lg:mx-4 mx-0'>
              {content}
            </p>
          </div>
        </div>
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
