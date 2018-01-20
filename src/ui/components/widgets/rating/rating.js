import React from 'react';
import PropTypes from 'prop-types';
import { times } from 'ramda';
import { withStyles } from 'material-ui/styles';
import renderIf from 'render-if';
import StarRateIcon from 'material-ui-icons/Star';
import StarHalfIcon from 'material-ui-icons/StarHalf';


const propTypes = {
  value: PropTypes.number.isRequired,
  classes: PropTypes.shape().isRequired,
};
const styles = theme => ({
  star: {
    color: theme.palette.primary[900],
  },
});

const Rating = ({ value = 0, classes }) => {
  const renderRatingStar = index => (<StarRateIcon key={index} className={classes.star} />);
  const renderHalfStar = () => (<StarHalfIcon className={classes.star} />);
  const difference = value - Math.floor(value);
  const renderIfHalf = renderIf(difference > 0.5);
  return (<div>
    {times(renderRatingStar)(Math.floor(value))}
    {renderIfHalf(renderHalfStar)}
  </div>);
};

Rating.propTypes = propTypes;
const withStylesHOC = withStyles(styles);
export default withStylesHOC(Rating);
