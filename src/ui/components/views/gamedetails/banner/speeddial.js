import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Add from 'material-ui-icons/Add';
import PlaylistAdd from 'material-ui-icons/PlaylistAdd';
import NoteAdd from 'material-ui-icons/NoteAdd';
import Close from 'material-ui-icons/Close';
import { SpeedDial, SpeedDialItem } from 'react-material-speeddial';
import { openAddGameToCollectionDialog,
  openAddGameToWishlistDialog } from 'actions/dialogs';

const styles = () => ({
  actions: {
    position: 'absolute',
    bottom: '-5%',
    right: '5%',
    width: '20%',
  },
});
class GameOptions extends React.Component {
  addToCollection = () => {
    this.props.openAddGameToCollectionDlg();
  }

  addToWishlist = () => {
    this.props.openAddGameToWishlistDlg();
  }
  render() {
    const { classes } = this.props;
    return (<div className={classes.actions}><SpeedDial
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
    </SpeedDial></div>);
  }
}

GameOptions.propTypes = {
  openAddGameToCollectionDlg: PropTypes.func.isRequired,
  openAddGameToWishlistDlg: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};
const mapDispatchToProps = dispatch => ({
  openAddGameToCollectionDlg: () => dispatch(openAddGameToCollectionDialog()),
  openAddGameToWishlistDlg: () => dispatch(openAddGameToWishlistDialog()),
});
const connectHOC = connect(null, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(GameOptions);
