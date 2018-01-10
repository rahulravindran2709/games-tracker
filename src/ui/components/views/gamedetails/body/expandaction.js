import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

const ExpandAction = ({ classes, isOpen, handleExpandClick }) => (
  <CardActions disableActionSpacing>
    <IconButton
      className={classnames(classes.expand, { [classes.expandOpen]: isOpen })}
      onClick={handleExpandClick}
      aria-expanded={isOpen}
      aria-label="Show more"
    >
      <ExpandMoreIcon />
    </IconButton>
  </CardActions>);

ExpandAction.propTypes = {
  classes: PropTypes.shape().isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleExpandClick: PropTypes.func.isRequired,
};
const withStylesHOC = withStyles(styles);
export default withStylesHOC(ExpandAction);
