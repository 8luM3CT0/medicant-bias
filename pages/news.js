//front-end
import { Head } from 'next/head'
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
  NewsHeader,
  TopNews,
  NewsContent
} from '../components/'
//back-end
import { useState } from 'react'
import { news } from './api/news/news'

function HomeNews ({ medNews, newsDataMed, scienceNews, foodNews }) {
  const [openTab, setOpenTab] = useState(1)

  //console.log('Med news articles >>>>>>>>>>>', medNews?.articles)
  //console.log('NewsData med json return >>>>>>>>>', newsDataMed?.results)
  //console.log('Science data be here >>>>>', scienceNews?.articles)
  //console.log('Food news data be here >>>>>>>>>>>>>', foodNews)
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
        space-y-3
        bg-gray-200 
        opacity-80
        overflow-y-scroll
        scrollbar-hide
        max-w-6xl
        mx-auto
        pb-[210px]
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
          mb-12
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
                content={news?.content}
                source={news?.url}
              />
            ))}
          </div>
          <Tab>
            <TabList color='cyan'>
              <div
                className='
              mx-auto 
              flex 
              items-center 
              overflow-x-scroll 
              scrollbar-thin 
              scrollbar-thumb-blue-800 
              scrollbar-track-sky-500'
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
                  <Icon name='health_and_safety' size='lg' />
                  Health
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
                  <Icon name='menu_book' size='lg' />
                  Food
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
                  <Icon name='science' size='lg' />
                  Science
                </TabItem>
              </div>
            </TabList>

            <TabContent>
              <TabPane active={openTab === 1 ? true : false}>
                <div
                  className='
                  lg:h-[790px]
                h-[390px]
                mx-auto
                max-w-full
                bg-blue-200
                rounded-lg
                overflow-y-scroll
                scrollbar-thin
                scrollbar-thumb-sky-600
                scrollbar-track-sky-200  
                space-y-4
                place-items-center
                grid
                '
                >
                  {newsDataMed.results.map(news => (
                    <NewsContent
                      urlToImage={news?.image_url}
                      author={news?.creator}
                      title={news?.title}
                      content={news?.description}
                    />
                  ))}
                </div>
              </TabPane>
              <TabPane active={openTab === 2 ? true : false}>
                <div
                  className='lg:h-[790px]
                h-[390px]
                mx-auto
                max-w-full
                bg-blue-200
                rounded-lg
                overflow-y-scroll
                scrollbar-thin
                scrollbar-thumb-sky-600
                scrollbar-track-sky-200  
                space-y-4
                place-items-center
                grid  
                '
                >
                  {foodNews.results.map(news => (
                    <NewsContent
                      urlToImage={news?.image_url}
                      author={news?.creator}
                      title={news?.title}
                      content={news?.description}
                    />
                  ))}
                </div>
              </TabPane>
              <TabPane active={openTab === 3 ? true : false}>
                <div
                  className='
                lg:h-[790px]
                h-[390px]
                mx-auto
                max-w-full
                bg-blue-200
                rounded-lg
                overflow-y-scroll
                scrollbar-thin
                scrollbar-thumb-sky-600
                scrollbar-track-sky-200  
                space-y-4
                place-items-center
                grid
                '
                >
                  {scienceNews.articles.map(news => (
                    <NewsContent
                      urlToImage={news?.urlToImage}
                      author={news?.author}
                      title={news?.title}
                      content={news?.description}
                    />
                  ))}
                </div>
              </TabPane>
            </TabContent>
          </Tab>
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

  const newsDataMed = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.newsdata_key}&category=health&country=us`
  ).then(res => res.json())

  const scienceNews = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.newsapi_key}&category=science&country=us`
  ).then(res => res.json())

  const foodNews = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.newsdata_key}&category=food&country=us`
  ).then(res => res.json())

  return {
    props: {
      medNews,
      newsDataMed,
      scienceNews,
      foodNews
    }
  }
}
