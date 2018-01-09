import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  text: {
    color: '#fff',
  },
  root: {
    backgroundColor: theme.palette.primary[900],
    padding: theme.spacing.unit * 2,
  },
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  avatar: {

  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
});

const ImageAvatars = (props) => {
  const { classes, userDetails: { first_name: firstName, last_name: lastName, email } } = props;
  return (<div className={classes.root}>
    <div className={classes.row}>
      <Avatar
        alt="Adelle Charles"
        src="https://material-ui-next.com/static/images/uxceo-128.jpg"
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
    <div className={classes.row}>
      <Typography type="body2" gutterBottom className={classes.text}>{`${firstName} ${lastName}`}</Typography>
    </div>
    <div className={classes.row}>
      <Typography type="body1" gutterBottom className={classes.text}>{email}</Typography>
    </div>
  </div>);
};

ImageAvatars.propTypes = {
  classes: PropTypes.shape().isRequired,
  userDetails: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ImageAvatars);
