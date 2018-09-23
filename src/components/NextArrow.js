import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import grey from '@material-ui/core/colors/grey';

const NextArrow = props => {
  const { className, style, onClick } = props;

  return (
    <ArrowForwardIcon
      className={className}
      style={{
        ...style,
        right: 0,
        color: grey[900],
        height: '100%',
        background:
          'linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%)',
        marginRight: -24,
      }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
