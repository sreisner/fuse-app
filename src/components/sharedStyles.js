import grey from '@material-ui/core/colors/grey';

const contentWidth = theme => ({
  width: '100%',
  padding: '0 1rem',
  [theme.breakpoints.up(768)]: {
    width: '50rem',
  },
  [theme.breakpoints.up(800)]: {
    width: '55rem',
  },
  [theme.breakpoints.up(900)]: {
    width: '60rem',
  },
  [theme.breakpoints.up(1000)]: {
    width: '75rem',
  },
  [theme.breakpoints.up(1100)]: {
    width: '80rem',
  },
  [theme.breakpoints.up(1150)]: {
    width: '85rem',
  },
  [theme.breakpoints.up(1250)]: {
    width: '91rem',
  },
  [theme.breakpoints.down(767)]: {
    width: '100vw',
  },
});

const slider = () => ({
  height: '100%',
  '& .slick-dots': {
    bottom: 10,
    '& button:before': {
      color: grey[50],
    },
    '& .slick-active button:before': {
      color: grey[200],
    },
  },
  '& .slick-slide': {
    marginBottom: -2,
  },
});

export default {
  contentWidth,
  slider,
};
