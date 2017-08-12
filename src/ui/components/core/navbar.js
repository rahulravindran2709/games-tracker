import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import normalize from 'normalize.css';

const propTypes = {
  handleToggleDrawer: PropTypes.func,
};
const defaultProps = {
  handleToggleDrawer: null,
};
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someProperty: 0,
    };
  }
  render() {
    const { handleToggleDrawer } = this.props;
    return (<AppBar title="Game Tracker" onLeftIconButtonTouchTap={handleToggleDrawer} iconClassNameRight="muidocs-icon-navigation-expand-more" />);
  }
}
Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
export default Navbar;
