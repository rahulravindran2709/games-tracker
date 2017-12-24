import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Slider from './collectionslide';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
});

const propTypes = {
  classes: PropTypes.shape().isRequired,
  collections: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  wishlists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
const DashboardBody = ({ classes, collections, wishlists }) => (
  <div className="body">
    <Slider collections={collections} />
    <Slider collections={wishlists} />
  </div>);

DashboardBody.propTypes = propTypes;
const stylesHOC = withStyles(styles);
export default stylesHOC(DashboardBody);
