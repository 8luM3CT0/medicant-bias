//front-end
import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../..'
//back-end
import { useState } from 'react'
import { useRouter } from 'next/router'

function TestHeader ({ title, iconName }) {
  const [showRoutes, setShowRoutes] = useState(false)
  const router = useRouter()

  return (
    <>
      <header
        className='
    bg-gradient-to-r
    from-gray-900
    to-red-500
    flex
    items-center
    justify-evenly
    px-4
    py-3
    '
      >
        <Button
          onClick={() => router.push('/test')}
          color='blue'
          buttonType='link'
          size='lg'
          iconOnly={true}
          rounded={false}
          block={false}
          ripple='light'
        >
          <Icon name='arrow_back_ios' />
        </Button>
        <Button
          color='blue'
          buttonType='link'
          size='regular'
          rounded={false}
          iconOnly={false}
          block={false}
          ripple='light'
          className='font-google-sans font-normal capitalize'
        >
          <Icon name={iconName} />
          <h2 className='text-xl'>{title}</h2>
        </Button>
        <Button
          color='blue'
          buttonType='link'
          iconOnly={false}
          block={false}
          rounded={false}
          ripple='light'
          className='capitalize grid'
        >
          <Icon name='contacts' />
          <h2 className='contact'>Contact</h2>
        </Button>
      </header>
    </>
  )
}

export default TestHeader
