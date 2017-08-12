import React from 'react';
import AppBar from 'material-ui/AppBar';
import normalize from 'normalize.css';
class Navbar extends React.Component {
  render() {
    const { handleToggleDrawer } = this.props;
    return (<AppBar title="Game Tracker" onLeftIconButtonTouchTap={handleToggleDrawer} iconClassNameRight="muidocs-icon-navigation-expand-more"></AppBar>);
  }
}

export default Navbar;
