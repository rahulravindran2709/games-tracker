import React from 'react';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
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
import selector from './addtimesheetentry.selector';

const styles = theme => ({

});
const convertToMinutes = value => value / (1000 * 60 );
const propTypes = {
  classes: PropTypes.shape().isRequired,
  closeDialog: PropTypes.func.isRequired,
  submitEntry: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  game: PropTypes.shape().isRequired,
  collection: PropTypes.shape().isRequired,
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
  handleSubmit = () => {
    const { game: { id: gameId }, collection: { collectionId } } = this.props;
    const { startTime, endTime } = this.state;
    this.props.submitEntry({ gameId, collectionId, startTime, endTime });
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
    return (<Dialog
      onClose={this.handleClose}
      aria-labelledby="timesheet"
      open={open}
      onBackdropClick={this.handleClose}
    >
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
            {renderIf((endTime - startTime) > 0)(() => (<DialogContentText>{`You spent a total of
              ${convertToMinutes(endTime - startTime)} minutes being awesome`}
            </DialogContentText>))}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
        <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
      </DialogActions>
    </Dialog>);
  }
}
AddTimesheetDialog.propTypes = propTypes;
AddTimesheetDialog.defaultProps = defaultProps;

const mapStateToProps = state => selector(state);
const mapDispatchToProps = dispatch => ({
  closeDialog: () => dispatch(closeAddTimesheetEntryDialog()),
  submitEntry: data => dispatch(submitTimesheetEntry(data)),
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(AddTimesheetDialog);
