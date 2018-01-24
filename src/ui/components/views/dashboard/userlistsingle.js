import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import ImageStack from 'components/widgets/imagestack';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  },
});
const propTypes = {
  classes: PropTypes.shape().isRequired,
};
const UserListSingle = ({ classes }) => (<div className={classes.root}>
  <div>
    <ImageStack />
    <Typography type="body2">Collection</Typography>
  </div>
</div>);

UserListSingle.propTypes = propTypes;
const stylesHOC = withStyles(styles);
export default stylesHOC(UserListSingle);
