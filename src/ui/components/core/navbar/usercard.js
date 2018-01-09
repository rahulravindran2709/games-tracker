import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const LogoutButton = ({ handleLogout }) => (<Button onTouchTap={handleLogout}>Logout</Button>);
LogoutButton.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};
const propTypes = {
  userDetails: PropTypes.shape().isRequired,
  classes: PropTypes.shape().isRequired,
  handleLogout: PropTypes.func.isRequired,
};

const styles = theme => ({
  root: {
    //padding: theme.spacing.unit,
  },
  text: {
    color: '#fff',
  },
  avatar: {
    width: 40,
    height: 40,
  },
});
const UserCard = ({ classes, userDetails: { first_name: firstName, last_name: lastName, email }, handleLogout }) => (
  <Grid container justify={'flex-end'}>
    <Grid item xs={2} lg={3}>
      <Avatar
        alt={`${firstName} ${lastName}`}
        src="https://material-ui-next.com/static/images/uxceo-128.jpg"
        className={classes.avatar}
      />
      <Card className={classes.root}>
        {/*<LogoutButton handleLogout={handleLogout} />*/}
      </Card>
    </Grid>
    <Grid item lg={9}>
      <Typography type="body2" className={classes.text}>Rahul Ravindran</Typography>
    </Grid>
  </Grid>);

UserCard.propTypes = propTypes;
const withStylesHOC = withStyles(styles);
export default withStylesHOC(UserCard);
