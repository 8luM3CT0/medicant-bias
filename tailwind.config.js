module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'google-sans': ['Open Sans', 'sans-serif'],
        'hind-font': ['Hind', 'sans-serif'],
        'font-robot': ['Roboto', 'sans-serif'],
        'robot-condensed': ['Roboto Condensed', 'sans-serif'],
        'robot-slab': ['Roboto Slab', 'serif'],
        'source-serif': ['Source Serif Pro', 'serif']
      },
      backgroundImage: theme => ({
        'mm-lakes':
          'url(https://www.mercurynews.com/wp-content/uploads/2018/10/MAMMOTH5.jpg)',
        'bb-mountain':
          'url(https://www.bigbearmountainresort.com/-/media/widen/big-bear-mountain-resort/scenic/winter/2021-bb-ls-parkinglots-drone-jpg.ashx?h=1350&w=2400&hash=73F0A5457CB1AAB4146758943DA36862)',
          'lake-tahoe':
          'url(https://californiacrossings.com/wp-content/uploads/2021/01/california-lake-tahoe-winter-emerald-bay-2.jpg)',
          'yosemite': 
          'url(https://ktla.com/wp-content/uploads/sites/4/2021/02/yosemite.jpeg)',
          'bb-lake':
          'url(https://www.visitcalifornia.com/sites/visitcalifornia.com/files/styles/welcome_image/public/VC_BigBearLakeWinter_Hero_BigBearMtn_Supplied_H4Y4191_1280x640_0.jpg)',
          'bb-hudson':
          'url(https://www.iskiny.com/sites/default/files/styles/1600x450/public/2019-11/210468399.jpeg?itok=oxwo2IO1)'
      }) 
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')
  ],
}
