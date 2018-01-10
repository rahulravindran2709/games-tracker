import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import compose from 'recompose/compose';
import Typography from 'material-ui/Typography';
import GridForm from 'components/core/form/gridform';
import GridButton from 'components/core/form/gridbutton';
import { connect } from 'react-redux';
import { authenticate } from 'actions/auth';

const FootLinks = () => (<Grid item xs={12}>
  <Grid container>
    <Grid item xs={6}>
      <Link to="/register">
        <Typography type="subheading" align="left">Register</Typography>
      </Link>
    </Grid>
    <Grid item xs={6}>
      <Typography type="subheading" align="right">Forgot password?</Typography>
    </Grid>
  </Grid>
</Grid>);
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
    minHeight: '250px',
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
  }
  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    return (
      <Grid container className={classes.root} justify="center" alignItems="center">
        <Grid item xs={4} >
          <form noValidate autoComplete="off">
            <Grid container className={classes.formBox}>
              <Paper className={classes.paper} elevation={10}>
                <Grid item xs={12}>
                  <Typography type="display2" align="center">Login</Typography>
                </Grid>
                <GridForm id="email" label="Email" value={email} onChange={this.handleChange('email')} />
                <GridForm id="password" type="password" label="Password" value={password} onChange={this.handleChange('password')} />
                <GridButton onSubmit={this.handleSubmit} label={'LOGIN'} />
                <FootLinks />
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
