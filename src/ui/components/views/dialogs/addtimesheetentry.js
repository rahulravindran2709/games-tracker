import React from 'react';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import moment from 'moment';
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
import { addMessageToSnackbarQueue } from 'actions';
import selector from './addtimesheetentry.selector';

const styles = theme => ({

});
const convertToMinutes = value => value / (1000 * 60);
const propTypes = {
  classes: PropTypes.shape().isRequired,
  closeDialog: PropTypes.func.isRequired,
  submitEntry: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  game: PropTypes.shape(),
  collection: PropTypes.shape(),
};

const defaultProps = {
  collection: null,
  game: null,
};
const TimesheetActions = ({ handleClose, handleSubmit }) => (<DialogActions>
  <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
  <Button onClick={handleSubmit} color="primary">
        Submit
      </Button>
</DialogActions>);
TimesheetActions.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
const TimetakenText = ({ timeTaken }) => (<Grid item xs={12}>
  <DialogContentText>{`You spent a total of
    ${convertToMinutes(timeTaken)} minutes being awesome`}
  </DialogContentText>
</Grid>);
TimetakenText.propTypes = {
  timeTaken: PropTypes.number.isRequired,
};
class AddTimesheetDialog extends React.Component {
  state = {
    startTime: moment(),
    endTime: moment(),
  }
  handleClose = () => {
    this.props.closeDialog();
  };
  handleSubmit = () => {
    const { game: { id: gameId }, collection: { collectionId } } = this.props;
    const { startTime, endTime } = this.state;
    const timeTaken = endTime - startTime;
    this.props.submitEntry({ gameId, collectionId, startTime, endTime, timeTaken })
    .then(this.handleClose)
    .then(() => this.props.showMessage('Time entry added successfully'));
  }
  handleChange = prop => date => this.setState({
    [prop]: date,
  });
  render() {
    const { classes, open, game } = this.props;
    const { startTime, endTime } = this.state;
    if (!open) {
      return null;
    }
    return (<Dialog onClose={this.handleClose} aria-labelledby="timesheet" open={open} onBackdropClick={this.handleClose}>
      <DialogTitle id="timesheet">Log time entry for {game.name}</DialogTitle>
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
          <Grid item xs={12}>
            {renderIf((endTime - startTime) > 0)(
              () => (<TimetakenText timeTaken={endTime - startTime} />))}
          </Grid>
        </Grid>
      </DialogContent>
      <TimesheetActions handleClose={this.handleClose} handleSubmit={this.handleSubmit} />
    </Dialog>);
  }
}
AddTimesheetDialog.propTypes = propTypes;
AddTimesheetDialog.defaultProps = defaultProps;

const mapStateToProps = state => selector(state);
const mapDispatchToProps = dispatch => ({
  closeDialog: () => dispatch(closeAddTimesheetEntryDialog()),
  submitEntry: data => dispatch(submitTimesheetEntry(data)),
  showMessage: message => dispatch(addMessageToSnackbarQueue(message)),
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(AddTimesheetDialog);
