import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import { logout } from 'actions/auth';
import SecureComponent from 'components/core/securecomponent';
import { toggleDrawer } from 'actions';
import ImageAvatars from './imageavatar';
import Logo from './logo';
import SecureListItems from './securelistitems';
import PublicListItems from './publiclistitems';

const styleSheet = () => ({
  root: {
    display: 'flex',
  },
});

class MenuList extends React.Component {
  render() {
    const { classes, isDrawerOpen, toggleNavDrawer, currentUser } = this.props;
    return (<Drawer
      open={isDrawerOpen}
      onRequestClose={toggleNavDrawer}
      onClick={toggleNavDrawer}
    >
      <SecureComponent
        protectedComponent={() => <ImageAvatars userDetails={currentUser} />}
        unprotectedComponent={Logo}
      />
      <SecureComponent
        protectedComponent={SecureListItems}
        unprotectedComponent={PublicListItems}
      />
    </Drawer>);
  }
}

MenuList.propTypes = {
  classes: PropTypes.shape().isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleNavDrawer: PropTypes.func.isRequired,
  currentUser: PropTypes.shape().isRequired,
};
const mapDispatchToProps = dispatch =>
  ({
    toggleNavDrawer: () => dispatch(toggleDrawer()),
    performLogout: () => dispatch(logout()),
  });
const mapStateToProps = ({ corereducer, auth }) => ({
  isDrawerOpen: corereducer.isDrawerOpen,
  currentUser: auth.user,
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styleSheet);
export default compose(connectHOC, withStylesHOC)(MenuList);
