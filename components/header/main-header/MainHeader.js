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
import { useRouter } from 'next/router'

function MainHeader () {
  const [showRoutes, setShowRoutes] = useState(false)
  const router = useRouter()

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
            onClick={e => setShowRoutes(true)}
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
            onClick={() => router.push('/info')}
            color='blue'
            buttonType='link'
            size='regular'
            rounded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='grid font-google-sans font-normal capitalize'
          >
            <Icon name='book_online' />
            <h2 className='text-xl'>Info</h2>
          </Button>
          <Button
            onClick={() => router.push('/news')}
            color='blue'
            buttonType='link'
            size='regular'
            rounded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='grid font-google-sans font-normal capitalize'
          >
            <Icon name='newspaper' />
            <h2 className='text-xl'>News</h2>
          </Button>
          <Button
            onClick={() => router.push('/test')}
            color='blue'
            buttonType='link'
            size='regular'
            rounded={false}
            iconOnly={false}
            block={false}
            ripple='light'
            className='grid font-google-sans font-normal capitalize'
          >
            <Icon name='quiz' />
            <h2 className='text-xl'>Test</h2>
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
      <Modal active={showRoutes} size='lg' toggler={() => setShowRoutes(false)}>
        <ModalHeader toggler={() => setShowRoutes(false)}>
          <h2
            className='
          font-mono 
          font-semibold 
          text-blue-600 
          text-base
          shadow-lg
          shadow-gray-700
          '
          >
            Routes to other pages
          </h2>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          grid 
          place-items-start
          space-y-4 
          p-[80px] 
          shadow-md 
          shadow-sky-500'
          >
            <Button
              onClick={() => router.push('/info')}
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
              className='
              capitalize 
              font-google-sans 
              font-normal 
              space-x-3
              hover:font-semibold'
            >
              <Icon name='book_online' />
              <h2 className='text-xl'>Info</h2>
            </Button>
            <Button
              onClick={() => router.push('/news')}
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
              className='
              capitalize 
              font-google-sans 
              font-normal 
              space-x-3
              hover:font-semibold'
            >
              <Icon name='newspaper' />
              <h2 className='text-xl'>News</h2>
            </Button>

            <Button
              onClick={() => router.push('/test')}
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
              className='
              capitalize 
              font-google-sans 
              font-normal 
              space-x-3
              hover:font-semibold'
            >
              <Icon name='quiz' />
              <h2 className='text-xl'>Test</h2>
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            onClick={e => setShowRoutes(false)}
            ripple='dark'
            className='capitalize'
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default MainHeader
