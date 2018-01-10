import React from 'react';
import PropTypes from 'prop-types';
import deepPurple from 'material-ui/colors/deepPurple';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  avatar: {
    margin: 0,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  chip: {
    margin: theme.spacing.unit,
  },
});
const CompanyChip = ({ classes }) => (<Grid item md={6}>
  <Typography type="button">
    <Chip
      avatar={<Avatar className={classes.avatar}>U</Avatar>}
      label="Ubisoft"
      className={classes.chip}
    /></Typography>
</Grid>);

CompanyChip.propTypes = {
  classes: PropTypes.shape().isRequired,
};
const withStylesHOC = withStyles(styles);
export default withStylesHOC(CompanyChip);
