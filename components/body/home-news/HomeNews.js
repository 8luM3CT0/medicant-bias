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

function HomeNews ({ healthNews }) {
  return (
    <>
      <div
        className='
    flex-grow
    rounded-lg 
    grid 
    h-[380px] 
    max-h-[440px] 
    space-y-7
    lg:w-[510px]
    w-[390px]
    max-w-lg
    py-5
    px-4
    place-text-center
    bg-gradient-to-t
    from-blue-900
    to-gray-700
    overflow-y-scroll
    scrollbar-hide
    '
      >
        {healthNews &&
          healthNews.map(
            ({
              id,
              title,
              creator,
              pubDate,
              full_description,
              description
            }) => (
              <News
                key={id}
                id={id}
                newsName={title}
                newsAuthor={creator}
                newsDate={pubDate}
                newsDescription={full_description}
                shortDescription={description}
              />
            )
          )}
      </div>
    </>
  )
}

export default HomeNews
