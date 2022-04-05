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

function MainHeader () {
  return (
    <>
      <div
        className='
    bg-gradient-to-r
    from-gray-900
    to-red-600
    flex 
    items-center 
    justify-evenly 
    px-4 
    py-3'
      >
        {/**left */}
        <div className='flex items-center space-x-4'>
          <Button
            color='blue'
            buttonType='link'
            size='lg'
            iconOnly={true}
            rounded={false}
            block={false}
            ripple='light'
            className='lg:hidden'
          >
            <Icon name='menu' />
          </Button>
          <Button
            color='blue'
            buttonType='link'
            size='lg'
            iconOnly={false}
            rounded={false}
            block={false}
            ripple='dark'
            className='capitalize font-google-sans font-normal space-x-3'
          >
            <Icon name='health_and_safety' />
            <h2 className='appName'>MedInfo</h2>
            {/**Subject to change in the future */}
          </Button>
        </div>
        {/**center (not present in the mobile screen) */}
        <div className='routesDiv'>
          <Button
            color='blue'
            buttonType='link'
            size='regular'
            rounded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='grid font-google-sans font-normal capitalize'
          >
            <Icon name='info' />
            <h2 className='text-xl'>About</h2>
          </Button>
          <Button
            color='blue'
            buttonType='link'
            size='regular'
            rounded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='grid font-google-sans font-normal capitalize'
          >
            <Icon name='info' />
            <h2 className='text-xl'>About</h2>
          </Button>
          <Button
            color='blue'
            buttonType='link'
            size='regular'
            rounded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='grid font-google-sans font-normal capitalize'
          >
            <Icon name='info' />
            <h2 className='text-xl'>About</h2>
          </Button>
          <Button
            color='blue'
            buttonType='link'
            size='regular'
            rounded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='grid font-google-sans font-normal capitalize'
          >
            <Icon name='info' />
            <h2 className='text-xl'>About</h2>
          </Button>
        </div>
        {/**right */}
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
      </div>
    </>
  )
}

export default MainHeader
