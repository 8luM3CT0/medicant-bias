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
function NewsContent ({
  author,
  content,
  publishedAt,
  source,
  title,
  url,
  urlToImage
}) {
  return (
    <div
      className='
    lg:max-w-[890px]
    px-3 
    py-4
    bg-gray-600
    lg:max-h-[490px]
    lg:h-[410px]
    max-h-[280px]
    h-[260px]
    flex
    items-center
    justify-evenly
    space-x-3
    lg:col-span-3
    col-span-2
    cursor-pointer
    rounded-xl
    '
    >
      {urlToImage ? (
        <img
          src={urlToImage}
          alt=''
          className='
    lg:max-h-[370px] 
    lg:max-w-[320px]
    lg:h-[240px]
    lg:w-[350px]
    h-[210px]
    w-[310px] 
    rounded-lg
    '
        />
      ) : (
        <img
          src='https://www.heps.or.ug/sites/default/files/images/2022/05/healh%20news%202.jpg'
          alt=''
          className='
    lg:max-h-[370px] 
    lg:max-w-[300px] 
    max-h-[180px] 
    max-w-[230px]
    rounded-lg
    '
        />
      )}
      <div className='grid place-items-center space-y-2'>
        <h2 className='newsContentTitle'>{title}</h2>
        {author ? (
          <h3 className='newsContentAuthor'>By {author}</h3>
        ) : (
          <h3 className='newsContentAuthor'>By N/A </h3>
        )}
      </div>
      <div className='newsContentText'>
        <p className='text-cyan-600 font-google-sans font-normal'>{content}</p>
      </div>
    </div>
  )
}

export default NewsContent
