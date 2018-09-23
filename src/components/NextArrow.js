import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import grey from '@material-ui/core/colors/grey';

const NextArrow = props => {
  const { className, style, onClick } = props;

  return (
    <ArrowForwardIcon
      className={className}
      style={{ ...style, right: 0, color: grey[900] }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
