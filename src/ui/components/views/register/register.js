import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { registerUser } from 'actions/auth';

const propTypes = {
  classes: PropTypes.shape().isRequired,
  register: PropTypes.func.isRequired,
};
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
    width: '100%',
  },
  button: {
    width: '100%',
  },
  textField: {
  },
});

class RegistrationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  }
  handleChange = name => (event) => {
    this.setState({
      newUser: {
        [name]: event.target.value,
      },
    });
  };
  handleSubmit = event => {
    this.props.register(this.state.newUser);
  }
  render() {
    const { classes } = this.props;
    const { newUser: { firstName, lastName, email,
      password, confirmPassword } } = this.state;
    return (<Grid container align="center" justify="center" className={classes.root}>
      <Grid item xs={4}>
        <Paper elevation={10} className={classes.paper}>
          <form className={classes.formBox}>
            <Grid container>
              <Grid item xs={12}>
                <Typography type="display2" align="center">Register</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="firstName"
                  label="First Name"
                  className={classes.textField}
                  value={firstName}
                  onChange={this.handleChange('firstName')}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="lastName"
                  label="Last Name"
                  className={classes.textField}
                  value={lastName}
                  onChange={this.handleChange('lastName')}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  id="email"
                  label="Email address"
                  className={classes.textField}
                  value={email}
                  onChange={this.handleChange('email')}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  id="password"
                  label="Password"
                  className={classes.textField}
                  value={password}
                  onChange={this.handleChange('password')}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  id="confirmPassword"
                  label="Verify Password"
                  className={classes.textField}
                  value={confirmPassword}
                  onChange={this.handleChange('confirmPassword')}
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
                  REGISTER
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>);
  }
}


RegistrationView.propTypes = propTypes;
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
  ({
    register: user => dispatch(registerUser(user)),
  });
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(RegistrationView);
