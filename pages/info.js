//front-end
import Head from 'next/head'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Icon,
  Tab,
  TabList,
  TabItem,
  TabContent,
  TabPane,
  InfoHeader,
  InfoData
} from '../components/'
//back-end
import { useState } from 'react'
import { med_data, gene_data, anat_data } from '../data/index'

function Info ({
  testData,
  secondTestData,
  thirdTestData,
  fourthTestData,
  fifthTestData,
  sixthTestData,
  seventhTestData,
  eigthTestData,
  ninthTestData,
  tenthTestData
}) {
  const [openTab, setOpenTab] = useState(2)

  console.log('Medicine data >>>>>>>>>', med_data)
  console.log('Genetics data >>>>>>>>>', gene_data)
  console.log('Anatomy data >>>>>>>>>', anat_data)

  return (
    <div
      className='
    h-screen 
    bg-mm-lakes
    bg-center
    bg-no-repeat
    bg-cover
    overflow-hidden
    '
    >
      <Head>
        <title>Our encyclopedia</title>
      </Head>
      <InfoHeader />
      <main
        className='
      max-w-6xl 
      h-screen
      place-items-center
      space-y-4
      bg-neutral-200
      opacity-90 
      mx-auto
      py-3
      px-4
      overflow-y-scroll
      scrollbar-hide
      pb-48
        '
      >
        <div className='max-w-full opacity-100 bg-gray-200 h-screen overflow-hidden'>
          <Tab>
            <TabList color='lightBlue'>
              <div className='mx-auto flex items-center'>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(1)
                  }}
                  ripple='light'
                  active={openTab === 1 ? true : false}
                  href='tabItem'
                >
                  <Icon name='directions_walk' size='lg' />
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(2)
                  }}
                  ripple='light'
                  active={openTab === 2 ? true : false}
                  href='tabItem'
                >
                  <Icon name='medication' size='lg' />
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(3)
                  }}
                  ripple='light'
                  active={openTab === 3 ? true : false}
                  href='tabItem'
                >
                  <Icon name='biotech' size='lg' />
                </TabItem>
              </div>
            </TabList>
            <TabContent>
              <TabPane active={openTab === 1 ? true : false}>
                <div
                  className='
              h-screen
              place-items-center 
              bg-sky-100 
              overflow-y-scroll 
              scrollbar-thin 
              scrollbar-track-slate-200 
              scrollbar-thumb-slate-600
              py-4
              px-5
              space-y-7
              '
                >
                  <div
                    className='
                  max-w-xl 
                  mx-auto 
                  px-8 
                  py-3 
                  bg-sky-300 
                  rounded-3xl'
                  >
                    <input
                      type='text'
                      placeholder='Search something related....'
                      className='
                     w-full
                      text-white
                      font-robot-slab
                      px-6 
                      bg-transparent
                      border-0 
                      outline-none 
                      text-lg
                      placeholder-gray-50
                      py-3
                      '
                    />
                  </div>
                  <span
                    className='
                  max-w-lg 
                  w-full 
                  text-center 
                  font-google-sans 
                  mx-auto 
                  space-y-3 
                  my-4'
                  >
                    <h1 className='text-lg font-normal text-gray-500 my-3'>
                      Human anatomy
                    </h1>
                    <p className='font-light text-gray-600 max-w-lg mx-auto'>
                      the study of the structures of the human body. An
                      understanding of anatomy is key to the practice of
                      medicine and other areas of health.
                    </p>
                  </span>
                  <div
                    className='
                    bg-blue-300
                  lg:h-[590px] 
                  h-[410px] 
                  overflow-y-scroll 
                  scrollbar-thin
                  scrollbar-track-slate-300
                  scrollbar-thumb-slate-600
                  place-items-center
                  grid
                  lg:grid-cols-3
                  md:grid-cols-2
                  grid-cols-1
                  space-y-4
                  '
                  >
                    {gene_data &&
                      gene_data.map(gene => (
                        <InfoData
                          name={gene.name}
                          description={gene.description}
                          geneSymbol={gene.geneSymbol}
                          published={gene.published}
                        />
                      ))}
                  </div>
                </div>
              </TabPane>
              <TabPane active={openTab === 2 ? true : false}>
                <div
                  className='
              h-screen 
              bg-sky-100 
              overflow-y-scroll 
              scrollbar-thin 
              scrollbar-track-slate-200 
              scrollbar-thumb-slate-600
              py-4
              px-5
              space-y-7
              '
                >
                  <div
                    className='
                  max-w-xl 
                  mx-auto 
                  px-8 
                  py-3 
                  bg-sky-300 
                  rounded-3xl'
                  >
                    <input
                      type='text'
                      placeholder='Search something related....'
                      className='
                     w-full
                      text-white
                      font-robot-slab
                      px-6 
                      bg-transparent
                      border-0 
                      outline-none 
                      text-lg
                      placeholder-gray-50
                      py-3
                      '
                    />
                  </div>
                  <span
                    className='
                  max-w-lg 
                  w-full 
                  text-center 
                  font-google-sans 
                  mx-auto 
                  space-y-3 
                  my-4'
                  >
                    <h1 className='text-lg font-normal text-gray-500 my-3'>
                      Medicine
                    </h1>
                    <p className='font-light text-gray-600 max-w-lg mx-auto'>
                      the science or practice of the diagnosis, treatment, and
                      prevention of disease (in technical use often taken to
                      exclude surgery).
                    </p>
                  </span>
                  <div
                    className='
                    bg-blue-300
                  lg:h-[590px] 
                  h-[410px] 
                  overflow-y-scroll
                  scrollbar-thin
                  scrollbar-track-sky-300
                  scrollbar-thumb-sky-600
                  place-items-center
                  grid
                  lg:grid-cols-3
                  md:grid-cols-2
                  grid-cols-1
                  space-y-4
                  '
                  >
                    {med_data &&
                      med_data.map(med => (
                        <InfoData
                          name={med.name}
                          description={med.description}
                          drug_class={med.drug_class}
                          published={med.published}
                        />
                      ))}
                  </div>
                </div>
              </TabPane>
              <TabPane active={openTab === 3 ? true : false}>
                <div
                  className='
              h-screen 
              bg-sky-100 
              overflow-y-scroll 
              scrollbar-thin 
              scrollbar-track-slate-200 
              scrollbar-thumb-slate-600
              py-4
              px-5
              space-y-7
              '
                >
                  <div
                    className='
                  max-w-xl 
                  mx-auto 
                  px-8 
                  py-3 
                  bg-sky-300 
                  rounded-3xl'
                  >
                    <input
                      type='text'
                      placeholder='Search something related....'
                      className='
                     w-full
                      text-white
                      font-robot-slab
                      px-6 
                      bg-transparent
                      border-0 
                      outline-none 
                      text-lg
                      placeholder-gray-50
                      py-3
                      '
                    />
                  </div>
                  <span
                    className='
                  max-w-lg 
                  w-full 
                  text-center 
                  font-google-sans 
                  mx-auto 
                  space-y-3 
                  my-4'
                  >
                    <h1 className='text-lg font-normal text-gray-500 my-3'>
                      Genetics
                    </h1>
                    <p className='font-light text-gray-600 max-w-lg mx-auto'>
                      The scientific study of genes and heredity—of how certain
                      qualities or traits are passed from parents to offspring
                      as a result of changes in DNA sequence
                    </p>
                  </span>
                  <div
                    className='
                    bg-blue-300
                  lg:h-[590px] 
                  h-[410px] 
                  overflow-y-scroll 
                  scrollbar-thin
                  scrollbar-track-red-300
                  scrollbar-thumb-red-600
                  place-items-center
                  grid
                  lg:grid-cols-3
                  md:grid-cols-2
                  grid-cols-1
                  space-y-4
                  '
                  >
                    {anat_data &&
                      anat_data.map(anat => (
                        <InfoData
                          name={anat.name}
                          description={anat.description}
                          human_system={anat.humanSystem}
                          published={anat.published}
                        />
                      ))}
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </Tab>
        </div>
      </main>
    </div>
  )
}

export default Info

export async function getServerSideProps () {
  const homeInfo = await fetch(
    'https://medlineplus.gov/download/genetics/condition/cyclic-vomiting-syndrome.json'
  ).then(res => res.json())

  return {
    props: {
      testData: homeInfo
    }
  }
}
