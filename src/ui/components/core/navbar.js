import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const propTypes = {
  handleToggleDrawer: PropTypes.func,
};
const defaultProps = {
  handleToggleDrawer: null,
};

const styleSheet = createStyleSheet({
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someProperty: 0,
    };
  }
  render() {
    const { handleToggleDrawer, classes } = this.props;
    return (<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu" onTouchTap={handleToggleDrawer} >
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
    </div>);
  }
}
Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
export default withStyles(styleSheet)(Navbar);
