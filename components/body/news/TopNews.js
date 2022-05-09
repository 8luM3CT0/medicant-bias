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
  return (
    <>
      <div
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
    </>
  )
}

export default TopNews
