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

function Info ({
  testData,
  secondTestData,
  drugData,
  heartData,
  lungsData,
  scrotumData,
  dpData,
  alzData,
  eyeData,
  footData,
  brainData,
  neuronData
}) {
  const [openTab, setOpenTab] = useState(2)
  //search state for human anatomy
  const [searchWord, setSearchWord] = useState('')
  //search state for medicine
  const [searchMed, setSearchMed] = useState('')
  //search state for genetics
  const [searchGenes, setSearchGenes] = useState('')
  //for the human anatomy
  const [data, setData] = useState('')

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
      `https://webapis.cancer.gov/drugdictionary/v1/Drugs/search?query=${searchMed}&matchType=Begins&size=100&from=0`
    ).then(res => {
      setData(res.data?.results?.[0])
    })
    setSearchMed('')
  }

  console.log('Data from genetics api >>>>', testData)

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
                  <p className='font-robot-slab text-base font-normal'>Human</p>
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
                  <p className='font-robot-slab text-base font-normal'>
                    Prescription
                  </p>
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
                      Human
                    </h1>
                    <p className='font-light text-gray-600 max-w-lg mx-auto'>
                      the most abundant and widespread species of primate,
                      characterized by bipedalism and large, complex brains.
                      This has enabled the development of advanced tools,
                      culture, and language. Humans are highly social and tend
                      to live in complex social structures composed of many
                      cooperating and competing groups, from families and
                      kinship networks to political states.
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
                  pb-40 
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
                    {heartData && (
                      <InfoData
                        name={heartData?.[0]?.hwi?.hw}
                        description={heartData?.[0]?.shortdef?.[0]}
                      />
                    )}
                    {lungsData && (
                      <InfoData
                        name={lungsData?.[0]?.hwi?.hw}
                        description={lungsData?.[0]?.shortdef?.[0]}
                      />
                    )}
                    {scrotumData && (
                      <InfoData
                        name={scrotumData?.[0]?.hwi?.hw}
                        description={scrotumData?.[0]?.shortdef?.[0]}
                      />
                    )}

                    {secondTestData && (
                      <InfoData
                        name={secondTestData?.[0]?.hwi?.hw}
                        description={secondTestData?.[0]?.shortdef?.[0]}
                      />
                    )}
                    {dpData && (
                      <InfoData
                        name={dpData?.[0]?.hwi?.hw}
                        description={dpData?.[0]?.shortdef?.[0]}
                      />
                    )}
                    {alzData && (
                      <InfoData
                        name={alzData?.[0]?.hwi?.hw}
                        description={alzData?.[0]?.shortdef?.[0]}
                      />
                    )}
                    {eyeData && (
                      <InfoData
                        name={eyeData?.[0]?.hwi?.hw}
                        description={eyeData?.[0]?.shortdef?.[0]}
                      />
                    )}

                    {neuronData && (
                      <InfoData
                        name={neuronData?.[0]?.hwi?.hw}
                        description={neuronData?.[0]?.shortdef?.[0]}
                      />
                    )}
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
                        {data?.name}
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
                        {data?.definition?.text}
                      </p>
                    </div>
                  )}
                  <div
                    className='
                    bg-cyan-800 
                    rounded-lg
                  lg:h-[690px]
                  md:h-[590px] 
                  h-[410px]
                  pb-40 
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
    'https://medlineplus.gov/download/genetics/condition/alzheimer-disease.json'
  ).then(res => res.json())

  const [
    lungsInfo,
    heartInfo,
    scrotumInfo,
    dpInfo,
    alzInfo,
    eyeInfo,
    footInfo,
    brainInfo,
    neuronInfo
  ] = await Promise.all([
    fetch(
      'https://www.dictionaryapi.com/api/v3/references/medical/json/lungs?key=c5c748e0-0226-4b4a-9746-5afc3c3edecd'
    ),
    fetch(
      'https://www.dictionaryapi.com/api/v3/references/medical/json/heart?key=c5c748e0-0226-4b4a-9746-5afc3c3edecd'
    ),
    fetch(
      'https://www.dictionaryapi.com/api/v3/references/medical/json/scrotum?key=c5c748e0-0226-4b4a-9746-5afc3c3edecd'
    ),
    fetch(
      'https://www.dictionaryapi.com/api/v3/references/medical/json/major_depressive_disorder?key=c5c748e0-0226-4b4a-9746-5afc3c3edecd'
    ),
    fetch(
      'https://www.dictionaryapi.com/api/v3/references/medical/json/alzheimer_disease?key=c5c748e0-0226-4b4a-9746-5afc3c3edecd'
    ),
    fetch(
      'https://www.dictionaryapi.com/api/v3/references/medical/json/eyes?key=c5c748e0-0226-4b4a-9746-5afc3c3edecd'
    ),
    fetch(
      'https://www.dictionaryapi.com/api/v3/references/medical/json/foot?key=c5c748e0-0226-4b4a-9746-5afc3c3edecd'
    ),
    fetch(
      'https://www.dictionaryapi.com/api/v3/references/medical/json/nervous_system?key=c5c748e0-0226-4b4a-9746-5afc3c3edecd'
    ),
    fetch(
      'https://www.dictionaryapi.com/api/v3/references/medical/json/neuron?key=c5c748e0-0226-4b4a-9746-5afc3c3edecd'
    )
  ])

  const [
    lungs,
    heart,
    scrotum,
    dp,
    alz,
    eye,
    foot,
    brain,
    neuron
  ] = await Promise.all([
    lungsInfo.json(),
    heartInfo.json(),
    scrotumInfo.json(),
    dpInfo.json(),
    alzInfo.json(),
    eyeInfo.json(),
    footInfo.json(),
    brainInfo.json(),
    neuronInfo.json()
  ])

  const medInfo = await fetch(
    'https://www.dictionaryapi.com/api/v3/references/medical/json/nervous_system?key=c5c748e0-0226-4b4a-9746-5afc3c3edecd'
  ).then(res => res.json())

  const drugInfo = await fetch(
    'https://webapis.cancer.gov/drugdictionary/v1/Drugs/search?query=ibuprofen&matchType=Begins&size=100&from=0'
  ).then(res => res.json())

  return {
    props: {
      testData: homeInfo,
      secondTestData: medInfo,
      drugData: drugInfo,
      lungsData: lungs,
      heartData: heart,
      scrotumData: scrotum,
      dpData: dp,
      alzData: alz,
      eyeData: eye,
      footData: foot,
      brainData: brain,
      neuronData: neuron
    }
  }
}
