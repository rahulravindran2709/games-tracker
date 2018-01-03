import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import GridForm from 'components/core/form/gridform';
import GridButton from 'components/core/form/gridbutton';
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
        ...this.state.newUser,
        [name]: event.target.value,
      },
    });
  };
  handleSubmit = (event) => {
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
              <GridForm
                id="firstName"
                label="First Name"
                className={classes.textField}
                value={firstName}
                onChange={this.handleChange('firstName')}
              />
              <GridForm
                id="lastName"
                label="Last Name"
                className={classes.textField}
                value={lastName}
                onChange={this.handleChange('lastName')}
              />
              <GridForm
                type="email"
                id="email"
                label="Email address"
                className={classes.textField}
                value={email}
                onChange={this.handleChange('email')}
              />
              <GridForm
                type="password"
                id="password"
                label="Password"
                className={classes.textField}
                value={password}
                onChange={this.handleChange('password')}
              />
              <GridForm
                type="password"
                id="confirmPassword"
                label="Verify Password"
                className={classes.textField}
                value={confirmPassword}
                onChange={this.handleChange('confirmPassword')}
              />
              <GridButton
                label={'REGISTER'}
                onSubmit={this.handleSubmit}
                className={classes.button}
              />
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>);
  }
}


RegistrationView.propTypes = propTypes;

const mapDispatchToProps = dispatch =>
  ({
    register: user => dispatch(registerUser(user)),
  });
const connectHOC = connect(null, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(RegistrationView);
