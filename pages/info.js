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
  InfoHeader
} from '../components/'
//back-end
import { useState } from 'react'

function Info () {
  const [openTab, setOpenTab] = useState(2)

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
              <div className='mx-auto max-w-6xl flex items-center'>
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
                  Anatomy
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
                  Medicine
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
                  Genes
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
                  <Input
                    type='text'
                    color='lightBlue'
                    size='lg'
                    outline={false}
                    placeholder='Search something in the human body....'
                    className='mx-auto max-w-xl w-[290px] text-gray-600'
                  />
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
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
              scrollbar-thumb-slate-600'
                >
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
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
              scrollbar-thumb-slate-600'
                >
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
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
