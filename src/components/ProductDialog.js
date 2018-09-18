import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles, CardMedia, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const styles = theme => ({
  image: {
    height: 250,
  },
  info: {},
  description: {
    width: 200,
  },
  fullInfo: {
    width: '30em',
    height: '30em',
  },
});

class ProductDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };
  }

  handleClickClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, product } = this.props;
    return (
      <React.Fragment>
        <Dialog
          open={this.props.open}
          onClose={this.props.onClose}
          fullWidth="true"
          maxWidth="sm"
        >
        
        </Dialog>
      </React.Fragment>
    );
  }
}

export default (ProductDialog = withStyles(styles)(ProductDialog));
