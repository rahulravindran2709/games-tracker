import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import compose from 'recompose/compose';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { authenticate } from 'actions/auth';


const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    height: '600px',
  },
  formBox: {
    height: '100%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '250px',
    width: '100%',
  },
  button: {
    width: '100%',
  },
  textField: {
  },
});


const propTypes = {
  authenticate: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};
const defaultProps = {
  authenticate: null,
};
class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test123@gmail.com',
      password: 'somepass',
      redirectToReferrer: false,
    };
  }
  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    const { email, password } = this.state;
    const { authenticate: authenticateLocal } = this.props;
    if (!email || !password) {
      return;
    }
    authenticateLocal({ email, password });
    this.setState({ redirectToReferrer: true });
  }
  render() {
    const { classes } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <Grid container className={classes.root} justify="center" align="center">
        <Grid item xs={4} >
          <form noValidate autoComplete="off">
            <Grid container className={classes.formBox}>
              <Paper className={classes.paper} elevation={10}>
                <Grid item xs={12}>
                  <Typography type="display2" align="center">Login</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    type="password"
                    label="Password"
                    className={classes.textField}
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onTouchTap={this.handleSubmit}
                    raised
                    color="primary"
                    className={classes.button}
                  >
          LOGIN
        </Button>
                </Grid>
              </Paper>
            </Grid>
          </form>


        </Grid>
      </Grid>);
  }
}

const mapStateToProps = state => ({
  search: state.corereducer.search,
});
const mapDispatchToProps = dispatch =>
  ({
    authenticate: credentials => dispatch(authenticate(credentials)),
  });

LoginView.propTypes = propTypes;
LoginView.defaultProps = defaultProps;
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(LoginView);
