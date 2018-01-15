import React from 'react';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Add from 'material-ui-icons/Add';
import PlaylistAdd from 'material-ui-icons/PlaylistAdd';
import NoteAdd from 'material-ui-icons/NoteAdd';
import Delete from 'material-ui-icons/Delete';
import Close from 'material-ui-icons/Close';
import Timer from 'material-ui-icons/Timer';
import { SpeedDial, SpeedDialItem } from 'react-material-speeddial';
import { openAddGameToCollectionDialog,
  openAddGameToWishlistDialog, openAddTimesheetEntryDialog } from 'actions/dialogs';
import selector from './speeddial.selector';

const styles = () => ({
  actions: {
    position: 'absolute',
    bottom: '-5%',
    right: '5%',
    width: '20%',
  },
});
const SpeedDialGameNotInCollection = ({
  actions: {
    addToCollection,
    addToWishlist,
  },
}) => (<SpeedDial
  fabContentOpen={<Add />}
  fabContentClose={<Close />}
>
  <SpeedDialItem
    label="Add to collection"
    fabContent={<PlaylistAdd />}
    onTouchTap={addToCollection}
  />
  <SpeedDialItem
    label="Add to wishlist"
    fabContent={<NoteAdd />}
    onTouchTap={addToWishlist}
  />
</SpeedDial>);
SpeedDialGameNotInCollection.propTypes = {
  actions: PropTypes.shape(),
};
SpeedDialGameNotInCollection.defaultProps = {
  actions: null,
};
const SpeedDialGameInCollection = ({
  actions: {
    addTimesheetEntry,
    removeFromCollection,
  },
}) => (<SpeedDial
  fabContentOpen={<Add />}
  fabContentClose={<Close />}
>
  <SpeedDialItem
    label="Add time entry"
    fabContent={<Timer />}
    onTouchTap={addTimesheetEntry}
  />
  <SpeedDialItem
    label="Remove from collection"
    fabContent={<Delete />}
    onTouchTap={removeFromCollection}
  />
</SpeedDial>);
SpeedDialGameInCollection.propTypes = {
  actions: PropTypes.shape(),
};
SpeedDialGameInCollection.defaultProps = {
  actions: null,
};
class GameOptions extends React.Component {
  addToCollection = () => {
    this.props.openAddGameToCollectionDlg();
  }

  addToWishlist = () => {
    this.props.openAddGameToWishlistDlg();
  }
  addTimesheetEntry = () => {
    this.props.openAddTimesheetEntryDlg();
  }
  render() {
    const { classes, isGameInCollection } = this.props;
    const notInCollectionActions = {
      addToCollection: this.addToCollection,
      addToWishlist: this.addToWishlist,
    };
    const inCollectionActions = {
      addTimesheetEntry: this.addTimesheetEntry,
      removeFromCollection: this.addToWishlist,
    };
    return (<div className={classes.actions}>
      {renderIf(!isGameInCollection)(
        <SpeedDialGameNotInCollection actions={notInCollectionActions} />)}
      {renderIf(isGameInCollection)(
        <SpeedDialGameInCollection actions={inCollectionActions} />)}
    </div>);
  }
}

GameOptions.propTypes = {
  openAddGameToCollectionDlg: PropTypes.func.isRequired,
  openAddGameToWishlistDlg: PropTypes.func.isRequired,
  openAddTimesheetEntryDlg: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
  isGameInCollection: PropTypes.bool.isRequired,
};
const mapStateToProps = state => selector(state);
const mapDispatchToProps = dispatch => ({
  openAddGameToCollectionDlg: () => dispatch(openAddGameToCollectionDialog()),
  openAddGameToWishlistDlg: () => dispatch(openAddGameToWishlistDialog()),
  openAddTimesheetEntryDlg: () => dispatch(openAddTimesheetEntryDialog()),
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(GameOptions);
