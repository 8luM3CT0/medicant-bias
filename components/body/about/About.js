//front-end
//back-end
function About () {
  return (
    <div
      className='
    grid
    max-w-6xl
    mx-auto
    h-full 
    place-items-center
    py-3 
    space-y-4'
    >
      {/**About and Image */}
      <div
        className='
      grid 
      space-y-4 
      max-w-full 
     lg:max-h-[690px]
      bg-cyan-600 
      space-x-4
      p-4
      rounded-lg
      '
      >
        <h1
          className='
      text-2xl 
      font-normal 
      font-mono 
      text-gray-200 
      underline'
        >
          About
        </h1>
        <div
          className='
      lg:flex 
      lg:items-center 
      justify-between
      space-x-4
      space-y-4 
      mx-auto 
      max-w-full 
      grid 
      px-3
       py-2
       rounded-md
       '
        >
          {/**What we are */}

          <div
            className='
        grid 
        rounded-lg
        max-w-lg 
        overflow-y-scroll 
        scrollbar-hide
        max-h-96
        h-[260px]
        place-items-center
        px-4
        py-3
        text-blue-100
        '
          >
            <h2 className='font-robot-slab font-semibold text-gray-200 leading-8 text-xl'>
              MedInfo is a website that has three functions: it is firstly an
              encylopedia filled with terminologies, facts and data regarding to
              a particular search term, a place where an individual or a group
              can test their knowledge of a particular medical field and
              thirdly, it is an app which helps in helping people seek the best
              and proper care if needed.
            </h2>
          </div>
          {/**Image of info */}
          <div
            className='
        grid 
        rounded-lg
        lg:w-[512px]
        max-w-lg 
        mx-auto
        overflow-y-scroll 
        scrollbar-hide
        h-[260px]
        max-h-96
        text-blue-100
        '
          >
            <img
              src='https://images.takeshape.io/f1ba446a-c0cf-4882-b0c9-50298f143ec2/dev/c471d38b-04c5-4f76-a1e8-ee47c1e6d0e2/partnershiptrustandethic_556026.jpg?auto=compress%2Cformat&crop=center'
              alt=''
              className='h-[260px] rounded-lg'
            />
          </div>
        </div>
      </div>
      {/**End of About and Image */}
      {/**Vision & mission */}
      <div
        className='
      grid 
      space-y-4 
      max-w-full 
     lg:max-h-[690px]
      bg-sky-600 
      p-4
      rounded-lg'
      >
        <h1
          className='
      text-2xl 
      font-normal 
      place-self-start
      font-mono 
      text-gray-200 
      underline'
        >
          The vision
        </h1>
        <h1
          className='
      text-2xl 
      font-normal
      place-self-start 
      font-mono 
      text-gray-200 
      underline'
        >
          The mission
        </h1>
      </div>
    </div>
  )
}

export default About