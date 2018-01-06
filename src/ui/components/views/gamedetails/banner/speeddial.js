import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Add from 'material-ui-icons/Add';
import PlaylistAdd from 'material-ui-icons/PlaylistAdd';
import NoteAdd from 'material-ui-icons/NoteAdd';
import Close from 'material-ui-icons/Close';
import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';
import { openAddGameToCollectionDialog,
  openAddGameToWishlistDialog } from 'actions/dialogs';

class GameOptions extends React.Component {
  addToCollection = () => {
    this.props.openAddGameToCollectionDlg();
  }

  addToWishlist = () => {
    this.props.openAddGameToWishlistDlg();
  }
  render() {
    return (<SpeedDial
      fabContentOpen={<Add />}
      fabContentClose={<Close />}
    >
      <SpeedDialItem
        label="Add to collection"
        fabContent={<PlaylistAdd />}
        onTouchTap={this.addToCollection}
      />
      <SpeedDialItem
        label="Add to wishlist"
        fabContent={<NoteAdd />}
        onTouchTap={this.addToWishlist}
      />
    </SpeedDial>);
  }
}

GameOptions.propTypes = {
  openAddGameToCollectionDlg: PropTypes.func.isRequired,
  openAddGameToWishlistDlg: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  openAddGameToCollectionDlg: () => dispatch(openAddGameToCollectionDialog()),
  openAddGameToWishlistDlg: () => dispatch(openAddGameToWishlistDialog()),
});
const connectHOC = connect(null, mapDispatchToProps);
export default connectHOC(GameOptions);
