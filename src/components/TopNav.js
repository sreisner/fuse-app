import React from 'react';
import Banner from './Banner';
import LeftNav from './LeftNav';
import { withStyles } from '@material-ui/core';
import TopNavDeliveryAddressButton from './TopNavDeliveryAddressButton';

const styles = theme => ({
  container: {
    position: 'fixed',
    width: '100%',
    zIndex: theme.zIndex.appBar,
  },
  menuRow: {
    position: 'relative',
    height: theme.spacing.unit * 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftNavContainer: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: theme.spacing.unit * 2,
  },
});

let TopNav = props => (
  <div className={props.classes.container}>
    {props.bannerMessage && <Banner message={props.bannerMessage} />}
    <div className={props.classes.menuRow}>
      <span className={props.classes.leftNavContainer}>
        <LeftNav />
      </span>
      <TopNavDeliveryAddressButton onClick={() => alert('implement me')} />
    </div>
  </div>
);

export default (TopNav = withStyles(styles)(TopNav));
