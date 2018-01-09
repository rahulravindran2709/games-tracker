import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import PopoverSection from './popoversection';


const propTypes = {
  userDetails: PropTypes.shape().isRequired,
  classes: PropTypes.shape().isRequired,
  handleLogout: PropTypes.func.isRequired,
};

const styles = theme => ({
  root: {
    // padding: theme.spacing.unit,
  },
  card: {
    padding: theme.spacing.unit,
  },
  text: {
    color: '#fff',
  },
  avatar: {
    width: 40,
    height: 40,
  },
  cardAvatar: {
    height: 60,
    width: 60,
  },
});
class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopoverOpen: false,
    };
  }
  handleClickButton = () => {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
      anchorEl: findDOMNode(this.button),
    });
  };
  render() {
    const { classes, userDetails:
      { first_name: firstName, last_name: lastName, email }, handleLogout } = this.props;
    const { isPopoverOpen } = this.state;
    return (<div><Grid container justify={'flex-end'}><Grid item xs={2} lg={12}>
      <Button
        ref={(node) => { this.button = node; }}
        className={classes.button}
        onClick={this.handleClickButton}
      >
        <Avatar
          alt={`${firstName} ${lastName}`}
          src="https://material-ui-next.com/static/images/uxceo-128.jpg"
          className={classes.avatar}
        />
        <Typography type="body2" className={classes.text}>{`${firstName} ${lastName}`}</Typography>
      </Button>
    </Grid></Grid>
      <PopoverSection
        isPopoverOpen={isPopoverOpen}
        firstName={firstName}
        lastName={lastName}
        email={email}
        handleLogout={handleLogout}
        anchorEl={this.state.anchorEl}
      /></div>);
  }
}

UserCard.propTypes = propTypes;
const withStylesHOC = withStyles(styles);
export default withStylesHOC(UserCard);
