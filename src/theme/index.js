import { themes } from 'mdx-deck'

export const theme = {
  ...themes.future,
  colors: {
    ...themes.future.colors,
    background: '#111018',
  },
  h2: {
    fontFamily: 'Montserrat',
  },
  styles: {
    Slide: {
      fontSize: '1.8rem',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  },
  text: {
    heading: {
      fontSize: '2.5rem',
      background: '-webkit-linear-gradient(#1ba0d7, #002d3f)',
    },
  },
}
