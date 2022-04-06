//front-end
import Head from 'next/head'
import {
  Header,
  Button,
  Icon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from '../components'
//back-end
import { useState } from 'react'

export default function Home () {
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    const response = await fetch('/api/comments')
    const data = await response.json()
    setComments(data)
  }

  return (
    <>
      <div
        className='
    h-screen 
    bg-mm-lakes
    bg-center
    bg-no-repeat
    bg-cover
    overflow-hidden'
      >
        <Head>
          <title>Medicant</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <header className='z-50 top-0 sticky'>
          <Header />
        </header>
        <main
          className='
      max-w-6xl 
      overflow-y-scroll 
      scrollbar-hide
      h-screen 
      bg-gray-300
      opacity-90 
      mx-auto
      px-4
      py-3
      '
        >
          <div className='h-screen mx-auto max-w-2xl opacity-100'>
            <Button
              color='red'
              buttonType='filled'
              size='regular'
              ripple='light'
              onClick={fetchComments}
            >
              Fetch the words
            </Button>
            <div className='mx-auto max-w-2xl grid'>
              {comments.map(comment => (
                <div
                  key={comment.id}
                  className='
            grid 
            place-items-center 
            space-y-4 
            font-google-sans 
            text-blue-400'
                >
                  <h2 className='text-2xl font-semibold'>
                    {comment.id} - {comment.word}
                  </h2>
                  <h3 className='text-xl font-normal'>
                    {comment.pronounce} - {comment.wordType}
                  </h3>
                  <h4 className='text-lg font-light'>{comment.meaning}</h4>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className='z-50 bottom-0 sticky bg-gray-600 px-8 py-4'>
          <h1 className='font-robot-slab text-blue-400 text-xl'>
            Footer component
          </h1>
        </footer>
      </div>
    </>
  )
}
