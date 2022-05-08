//front-end
import { Head } from 'next/head'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  NewsHeader,
  TopNews
} from '../components/'
//back-end
import { useState } from 'react'
import { news } from './api/news/news'

function HomeNews ({ medNews }) {
  console.log('medNews be here >>>>>>>', medNews?.articles)

  return (
    <>
      <div
        className='
    h-screen 
    overflow-hidden 
    bg-cover 
    bg-lake-tahoe 
    bg-center 
    bg-no-repeat'
      >
        <NewsHeader />
        <main
          className='
        h-screen 
        bg-gray-200 
        opacity-80
        overflow-hidden
        max-w-6xl
        mx-auto
        px-3
        '
        >
          <div
            className='
          overflow-x-scroll 
          scrollbar-thin 
          scrollbar-track-slate-800 
          scrollbar-thumb-slate-300 
          lg:max-h-[420px]
          lg:h-[395px] 
          max-h-[280px]
          h-[275px] 
          max-w-full
          mx-auto 
          px-4
          bg-blue-100
          py-2
          rounded-lg
          space-x-7
          flex
          items-center
          '
          >
            {medNews.articles.map(news => (
              <TopNews
                urlToImage={news?.urlToImage}
                author={news?.author}
                title={news?.title}
              />
            ))}
          </div>
        </main>
        <footer
          className='
        z-50 
        bottom-0 
        sticky 
        bg-gray-600 
        px-8 
        py-4 
        justify-between 
        flex 
        items-center'
        >
          <Button
            color='lightBlue'
            buttonType='link'
            iconOnly={false}
            block={false}
            rounded={false}
            className='
          capitalize
          hover:underline 
          font-google-sans 
          font-normal'
          >
            <h1 className='text-xl '>Looking for services ? Click here.</h1>
          </Button>
          <Button
            color='lightBlue'
            buttonType='link'
            iconOnly={false}
            block={false}
            rounded={false}
            className='
            flex
            items-center
            space-x-4
          capitalize
          font-google-sans 
          font-normal'
          >
            <Icon name='terminal' />
            <h1 className='developerTitle'>Developer</h1>
          </Button>
        </footer>
      </div>
    </>
  )
}

export default HomeNews

export async function getServerSideProps () {
  const medNews = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.newsapi_key}&category=health`
  ).then(res => res.json())

  return {
    props: {
      medNews
    }
  }
}
