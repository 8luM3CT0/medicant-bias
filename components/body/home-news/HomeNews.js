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

function HomeNews ({ news }) {
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
    py-7
    px-4
    place-text-center
    bg-gradient-to-t
    from-blue-900
    to-gray-700
    overflow-y-scroll
    scrollbar-hide
    '
      >
        {news &&
          news.map(
            ({ id, title, author, publishedAt, content, description, url }) => (
              <News
                key={id}
                id={id}
                newsName={title}
                newsAuthor={author}
                newsDate={publishedAt}
                newsDescription={content}
                shortDescription={description}
                link={url}
              />
            )
          )}
      </div>
    </>
  )
}

export default HomeNews
