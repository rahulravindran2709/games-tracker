import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { path } from 'ramda';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import { closeAddTimesheetEntryDialog } from 'actions/dialogs';
import { submitTimesheetEntry } from 'actions/timesheet';

const styles = (theme) => ({

});

const propTypes = {
  classes: PropTypes.shape().isRequired,
};

const defaultProps = {

};
class AddTimesheetDialog extends React.Component {
  handleClose = () => {
    this.props.closeDialog(this.props.selectedValue);
  };

  render() {
    const { classes } = this.props;
    return (<Dialog
      onClose={this.handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      onBackdropClick={this.handleClose}
    >
      <DialogTitle id="simple-dialog-title">Add timesheet for game</DialogTitle>

    </Dialog>);
  }
}
AddTimesheetDialog.propTypes = propTypes;
AddTimesheetDialog.defaultProps = defaultProps;
const getIsTimesheetDialogOpen = path(['dialogs', 'isAddTimesheetOpen']);
const mapStateToProps = state => ({
  open: getIsTimesheetDialogOpen(state),
});
const mapDispatchToProps = dispatch => ({
  closeDialog: () => dispatch(closeAddTimesheetEntryDialog()),
  submitEntry: (data) => dispatch(submitTimesheetEntry(data))
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(AddTimesheetDialog);
