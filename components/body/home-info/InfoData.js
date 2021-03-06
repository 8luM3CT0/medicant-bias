//front-end
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Icon } from '../..'
//back-end
import { useState } from 'react'

function InfoData ({
  id,
  name,
  description,
  published,
  geneSymbol,
  generic_name,
  drug_class,
  human_system
}) {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <div
        onClick={e => setShowMore(true)}
        className='
      bg-gradient-to-br
      from-sky-400
      to-blue-500
      rounded-lg
      h-[280px] 
      max-h-[340px]
      lg:w-[280px]
      w-[260px]
      max-w-lg
      flex
      flex-col
      justify-center
      p-7
      space-y-4
      cursor-pointer
      hover:opacity-80
      transform
      transition
      duration-300
      ease-in-out
      hover:scale-105
      '
      >
        <p className='text-base font-robot-slab text-blue-300 font-normal place-self-start'>
          Term of the day:
        </p>
        <h1 className='text-xl font-mono text-blue-100 font-semibold'>
          {name}
        </h1>
      </div>
      <Modal
        size='regular'
        active={showMore}
        toggler={() => setShowMore(false)}
      >
        <div className='grid place-items-start px-3 py-2 bg-cyan-700 rouded-lg space-y-2'>
          <ModalHeader toggler={() => setShowMore(false)}>
            {published && (
              <h5
                className='
            text-sm 
            font-robot-slab 
            font-normal 
            text-sky-200
            px-6
            '
              >
                Published on: {published}
              </h5>
            )}
          </ModalHeader>
          <ModalBody>
            <div className='p-8 grid place-items-start space-y-4 max-w-md'>
              <h1 className='text-2xl font-semibold font-google-sans text-indigo-100 border-b-2 border-gray-300'>
                {name}
              </h1>
              <div
                className='
              lg:h-[460px] 
              px-4
              py-3
              lg:max-h-[490px]
              max-h-[280px] 
              overflow-y-scroll 
              scrollbar-hide 
              bg-gray-600
              rounded-lg
              '
              >
                <p
                  className='
                text-xl
                font-google-sans 
                leading-relaxed 
                text-gray-50
                lg:font-light
                font-semibold'
                >
                  {description}
                </p>
              </div>
              {geneSymbol ? (
                <p className='text-base font-normal font-robot-slab text-cyan-200 border-b-2 border-cyan-300'>
                  Gene symbol: {geneSymbol}
                </p>
              ) : drug_class ? (
                <p className='text-base font-normal font-robot-slab text-cyan-200 border-b-2 border-cyan-300'>
                  Drug class: {drug_class}
                </p>
              ) : human_system ? (
                <p className='text-base font-normal font-robot-slab text-cyan-200 border-b-2 border-cyan-300'>
                  Anatomy classification: {human_system}
                </p>
              ) : (
                ' '
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={e => setShowMore(false)}
              color='red'
              buttonType='filled'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
              className='capitalize font-google-sans font-light hover:font-normal'
            >
              <Icon name='cancel' />
              Close
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  )
}

export default InfoData
