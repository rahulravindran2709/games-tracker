import React from 'react';
import PropTypes from 'prop-types';
import { times } from 'ramda';
import StarRateIcon from 'material-ui-icons/Star';


const propTypes = {
  value: PropTypes.number.isRequired,
};
const renderRatingStar = (index) => (<StarRateIcon key={index} style={{ color: 'aqua' }} />);
const Rating = ({ value = 0 }) => (<div>{times(renderRatingStar)(value)}</div>);

Rating.propTypes = propTypes;
export default Rating;
