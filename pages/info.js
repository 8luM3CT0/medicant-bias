//front-end
import Head from 'next/head'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
import Axios from 'axios'
import { data } from 'autoprefixer'

function Info ({ testData, secondTestData, drugData }) {
  const [openTab, setOpenTab] = useState(2)
  //search state for human anatomy
  const [searchWord, setSearchWord] = useState('')
  //search state for medicine
  const [searchMed, setSearchMed] = useState('')
  //search state for genetics
  const [searchGenes, setSearchGenes] = useState('')
  //for the human anatomy
  const [data, setData] = useState('')
  //for the medicine
  const [medData, setMedData] = useState('')
  //for the genetics
  const [geneticsData, setGeneticsData] = useState('')

  //human anatomy
  function getBodyPart () {
    Axios.get(
      `https://www.dictionaryapi.com/api/v3/references/medical/json/${searchWord}?key=c5c748e0-0226-4b4a-9746-5afc3c3edecd`
    ).then(res => {
      setData(res.data[0])
    })

    setSearchWord('')
  }

  //medicine
  function getMed () {
    Axios.get(
      `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${searchMed}`
    ).then(res => {
      setData(res.data?.drugGroup?.conceptGroup?.[1]?.conceptProperties)
    })
    setSearchMed('')
  }

  //genetics
  function getGeneticsTerm () {
    Axios.get(
      `https://medlineplus.gov/download/genetics/condition/${searchGenes}.json`
    ).then(res => {
      setGeneticsData(res.data)
    })
    setSearchWord('')
  }

  console.log('Test data here >>>>>>>>', testData)

  console.log('the genetics term is here >>>>>>>>', getGeneticsTerm)

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
              <div
                className='
              mx-auto 
              flex 
              items-center 
              overflow-x-scroll 
              scrollbar-thin 
              scrollbar-thumb-slate-800 
              scrollbar-track-red-500'
              >
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
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(4)
                  }}
                  ripple='light'
                  active={openTab === 4 ? true : false}
                  href='tabItem'
                >
                  <Icon name='psychology' size='lg' />
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
                  flex
                  items-center
                  px-8 
                  py-3 
                  bg-sky-300 
                  rounded-3xl'
                  >
                    <input
                      type='text'
                      value={searchWord}
                      onChange={e => setSearchWord(e.target.value)}
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
                      flex-grow
                      '
                    />
                    <Button
                      onClick={getBodyPart}
                      color='gray'
                      buttonType='link'
                      iconOnly={true}
                      rounded={true}
                      block={false}
                      ripple='light'
                    >
                      <Icon name='search' />
                    </Button>
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
                  {data && (
                    <div
                      className='
                    max-w-2xl
                    rounded-lg
                    grid
                    place-items-center
                    mx-auto 
                    max-h-[210px]
                    h-[190px] 
                    bg-blue-600 
                    hover:bg-blue-400 
                    transform
                    transition
                    duration-300
                    overflow-y-scroll
                    scrollbar-thin
                    scrollbar-track-slate-50
                    scrollbar-thumb-slate-700
                    '
                    >
                      <h1
                        className='
                      text-2xl 
                      font-robot-slab 
                      font-normal 
                      text-sky-200 
                      p-5'
                      >
                        {data?.hwi?.hw}
                      </h1>
                      <p
                        className='
                      text-lg 
                      font-google-sans 
                      font-light 
                      text-gray-100
                      max-w-xl
                      w-[220px]

                      '
                      >
                        {data?.shortdef?.[0]}
                      </p>
                    </div>
                  )}
                  <div
                    className='
                    bg-blue-800
                  lg:h-[690px]
                  md:h-[590px] 
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
                  rounded-lg
                  '
                  >
                    {anat_data &&
                      anat_data.map(gene => (
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
                  flex
                  items-center
                  px-8 
                  py-3 
                  bg-sky-300 
                  rounded-3xl'
                  >
                    <input
                      type='text'
                      placeholder='Search something related....'
                      value={searchMed}
                      onChange={e => setSearchMed(e.target.value)}
                      className='
                     w-full
                     flex-grow
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
                    <Button
                      color='gray'
                      onClick={getMed}
                      buttonType='link'
                      iconOnly={true}
                      rounded={true}
                      block={false}
                      ripple='light'
                    >
                      <Icon name='search' />
                    </Button>
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
                  {data && (
                    <div
                      className='
                    max-w-2xl
                    rounded-lg
                    grid
                    place-items-center
                    mx-auto 
                    max-h-[210px]
                    h-[190px] 
                    bg-cyan-600 
                    hover:bg-cyan-400 
                    transform
                    transition
                    duration-300
                    overflow-y-scroll
                    scrollbar-thin
                    scrollbar-track-slate-50
                    scrollbar-thumb-slate-700'
                    >
                      <h1
                        className='
                      text-2xl 
                      font-robot-slab 
                      font-normal 
                      text-sky-200 
                      p-5'
                      >
                        {data?.[0]?.name}
                      </h1>
                    </div>
                  )}
                  <div
                    className='
                    bg-cyan-800 
                    rounded-lg
                  lg:h-[690px]
                  md:h-[590px] 
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
                  flex
                  items-center
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
                      value={searchWord}
                      onChange={e => setSearchWord(e.target.value)}
                      className='
                     w-full
                     flex-grow
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
                    <Button
                      onClick={getGeneticsTerm}
                      color='gray'
                      buttonType='link'
                      iconOnly={true}
                      rounded={true}
                      block={false}
                      ripple='light'
                    >
                      <Icon name='search' />
                    </Button>
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
                  {geneticsData && (
                    <div
                      className='
                    max-w-2xl
                    rounded-lg
                    grid
                    place-items-center
                    mx-auto 
                    max-h-[210px]
                    h-[190px] 
                    bg-red-600 
                    hover:bg-red-400 
                    transform
                    transition
                    duration-300
                    overflow-y-scroll
                    scrollbar-thin
                    scrollbar-track-slate-50
                    scrollbar-thumb-slate-700
                    '
                    >
                      <h1
                        className='
                      text-2xl 
                      font-robot-slab 
                      font-normal 
                      text-sky-200 
                      p-5'
                      >
                        {geneticsData?.hwi?.hw}
                      </h1>
                      <p
                        className='
                      text-lg 
                      font-google-sans 
                      font-light 
                      text-gray-100
                      max-w-xl
                      w-[220px]

                      '
                      >
                        {geneticsData?.shortdef?.[0]}
                      </p>
                    </div>
                  )}
                  <div
                    className='
                    bg-rose-800 
                  lg:h-[690px]
                  md:h-[590px] 
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
                    {gene_data &&
                      gene_data.map(anat => (
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
              <TabPane active={openTab === 4 ? true : false}>
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
                  flex
                  items-center
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
                      value={searchWord}
                      onChange={e => setSearchWord(e.target.value)}
                      className='
                     w-full
                     flex-grow
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
                    <Button
                      color='gray'
                      buttonType='link'
                      iconOnly={true}
                      rounded={true}
                      block={false}
                      ripple='light'
                    >
                      <Icon name='search' />
                    </Button>
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
                      Psychology
                    </h1>
                    <p className='font-light text-gray-600 max-w-lg mx-auto'>
                      the scientific study of the human mind and its functions,
                      especially those affecting behavior in a given context.
                    </p>
                  </span>
                  <div
                    className='
                    bg-green-800 
                  lg:h-[690px]
                  md:h-[590px] 
                  h-[410px]  
                  overflow-y-scroll 
                  scrollbar-thin
                  scrollbar-track-green-300
                  scrollbar-thumb-green-600
                  place-items-center
                  grid
                  lg:grid-cols-3
                  md:grid-cols-2
                  grid-cols-1
                  space-y-4
                  '
                  >
                    {gene_data &&
                      gene_data.map(anat => (
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

  const medInfo = await fetch(
    'https://www.dictionaryapi.com/api/v3/references/medical/json/nervous_system?key=c5c748e0-0226-4b4a-9746-5afc3c3edecd'
  ).then(res => res.json())

  const drugInfo = await fetch(
    'https://rxnav.nlm.nih.gov/REST/drugs.json?name=advil'
  ).then(res => res.json())

  return {
    props: {
      testData: homeInfo,
      secondTestData: medInfo,
      drugData: drugInfo
    }
  }
}
