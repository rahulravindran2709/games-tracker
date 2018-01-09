import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Popover from 'material-ui/Popover';
import Card from 'material-ui/Card';

const LogoutButton = ({ handleLogout }) => (<Button onTouchTap={handleLogout}>Logout</Button>);
LogoutButton.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

const propTypes = {
  classes: PropTypes.shape().isRequired,
  isPopoverOpen: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  anchorEl: PropTypes.shape(),
};

const styles = theme => ({
  card: {
    padding: theme.spacing.unit,
  },
  cardAvatar: {
    height: 60,
    width: 60,
  },
});
const PopoverSection = ({ classes, isPopoverOpen,
  firstName, lastName, email, handleLogout,
anchorEl }) => (
  <Popover
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    open={isPopoverOpen}
    anchorEl={anchorEl}
    anchorReference={'anchorEl'}
  >
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={3}>
          <Avatar
            alt={`${firstName} ${lastName}`}
            src="https://material-ui-next.com/static/images/uxceo-128.jpg"
            className={classes.cardAvatar}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography type="body2">{`${firstName} ${lastName}`}</Typography>
          <Typography type="body1">{email}</Typography>
        </Grid>
        <Grid item xs={12}>
          <LogoutButton handleLogout={handleLogout} />
        </Grid>
      </Grid>
    </Card>
  </Popover>);
PopoverSection.propTypes = propTypes;
const withStylesHOC = withStyles(styles);
export default withStylesHOC(PopoverSection);
