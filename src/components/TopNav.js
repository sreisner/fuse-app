import React, { Component } from 'react';
import Banner from './Banner';
import LeftNav from './LeftNav';
import { withStyles } from '@material-ui/core';
import TopNavDeliveryAddressButton from './TopNavDeliveryAddressButton';
import grey from '@material-ui/core/colors/grey';
import ViewCartButton from './ViewCartButton';

const styles = theme => ({
  topNav: {
    position: 'fixed',
    width: '100%',
    zIndex: theme.zIndex.appBar,
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)',
  },
  menuRow: {
    position: 'relative',
    height: theme.spacing.unit * 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'green',
    transition: '0.3s all',
  },
  leftNavContainer: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: theme.spacing.unit * 2,
  },
});

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuRowBackground: '',
      menuRowBottomBorder: false,
    };
  }

  updateMenuRowStyleState = () => {
    if (window.scrollY === 0) {
      this.setState({
        menuRowBackground: 'transparent',
        menuRowBottomBorder: 'none',
      });
    } else {
      this.setState({
        menuRowBackground: grey[50],
        menuRowBottomBorder: `1px solid ${grey[300]}`,
      });
    }
  };

  componentDidMount() {
    this.updateMenuRowStyleState();

    window.addEventListener('scroll', this.updateMenuRowStyleState);
  }

  render() {
    const { classes, bannerMessage } = this.props;
    const { menuRowBackground, menuRowBottomBorder } = this.state;

    return (
      <div className={classes.topNav}>
        {bannerMessage && <Banner message={bannerMessage} />}
        <div
          className={classes.menuRow}
          style={{
            background: menuRowBackground,
            borderBottom: menuRowBottomBorder,
          }}
        >
          <span className={classes.leftNavContainer}>
            <LeftNav />
          </span>
          <TopNavDeliveryAddressButton onClick={() => alert('implement me')} />
          <ViewCartButton />
        </div>
      </div>
    );
  }
}

export default (TopNav = withStyles(styles)(TopNav));
