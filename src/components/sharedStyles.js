const contentWidth = theme => ({
  width: '100%',
  padding: '0 1rem',
  [theme.breakpoints.up(768)]: {
    maxWidth: '50rem',
  },
  [theme.breakpoints.up(800)]: {
    maxWidth: '55rem',
  },
  [theme.breakpoints.up(900)]: {
    maxWidth: '60rem',
  },
  [theme.breakpoints.up(1000)]: {
    maxWidth: '75rem',
  },
  [theme.breakpoints.up(1100)]: {
    maxWidth: '80rem',
  },
  [theme.breakpoints.up(1150)]: {
    maxWidth: '85rem',
  },
  [theme.breakpoints.up(1250)]: {
    maxWidth: '91rem',
  },
  [theme.breakpoints.down(767)]: {
    width: '100%',
  },
});

export default {
  contentWidth,
};
