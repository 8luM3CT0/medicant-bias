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

function HomeNews ({ id, newsName, newsAuthor, newsDate }) {
  return (
    <div
      className='
    flex-grow
    rounded-lg 
    grid 
    h-[380px] 
    max-h-[440px] 
    space-y-4
    px-3
    bg-gradient-to-t
    from-blue-900
    to-gray-700
    overflow-y-scroll
    scrollbar-hide
    '
    ></div>
  )
}

export default HomeNews
