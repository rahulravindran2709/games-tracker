import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import { addMessageToSnackbarQueue, closeSnackbar } from 'actions';

const propTypes = {
  classes: PropTypes.shape().isRequired,
  open: PropTypes.bool.isRequired,
  messages: PropTypes.string.isRequired,
  closeMessage: PropTypes.func.isRequired,
};
const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});
const snackbarOrientation = { vertical: 'bottom', horizontal: 'center' };
const snackbarContentProps = { 'aria-describedby': 'message-id' };
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.closeMessage();
  };

  render() {
    const { classes, messages, open } = this.props;
    return (<div>
      <Snackbar
        anchorOrigin={snackbarOrientation}
        open={open}
        autoHideDuration={1500}
        onClose={this.handleClose}
        SnackbarContentProps={snackbarContentProps}
        message={<span id="message-id">{messages}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>);
  }
}

Message.propTypes = propTypes;

const mapStateToProps = state => ({
  messages: state.corereducer.currentMessage,
  open: state.corereducer.isSnackbarOpen,
});
const mapDispatchToProps = dispatch => ({
  closeMessage: () => dispatch(closeSnackbar()),
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(Message);
