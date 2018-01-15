import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import DateTimePicker from 'components/core/datetimepicker';
import { submitTimesheetEntry } from 'actions/timesheet';
import { closeAddTimesheetEntryDialog } from 'actions/dialogs';

const styles = theme => ({

});

const propTypes = {
  classes: PropTypes.shape().isRequired,
  closeDialog: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const defaultProps = {

};
class AddTimesheetDialog extends React.Component {
  state = {
    startTime: new Date(),
    endTime: new Date(),
  }
  handleClose = () => {
    this.props.closeDialog();
  };
  handleChange = prop => event => this.setState({
    [prop]: event.target.value,
  });
  render() {
    const { classes, open } = this.props;
    const { startTime, endTime } = this.state;
    return (<Dialog
      onClose={this.handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      onBackdropClick={this.handleClose}
    >
      <DialogTitle id="simple-dialog-title">Add timesheet for game</DialogTitle>
      <DialogContent>
      <Grid container>
        <Grid item xs={12}>
          <DateTimePicker
            value={startTime}
            onChange={this.handleChange('startTime')}
            label={'Start time'}
          />
        </Grid>
        <Grid item xs={12}>
          <DateTimePicker
            value={endTime}
            onChange={this.handleChange('endTime')}
            label={'End time'}
          />
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
    </Dialog>);
  }
}
AddTimesheetDialog.propTypes = propTypes;
AddTimesheetDialog.defaultProps = defaultProps;

const mapStateToProps = state => ({
  open: state.dialogs.isAddTimesheetOpen,
});
const mapDispatchToProps = dispatch => ({
  closeDialog: () => dispatch(closeAddTimesheetEntryDialog()),
  submitEntry: data => dispatch(submitTimesheetEntry(data)),
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(AddTimesheetDialog);
