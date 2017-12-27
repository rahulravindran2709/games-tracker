import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import compose from 'recompose/compose';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { authenticate } from 'actions/auth';


const styles = theme => ({
  root: {
    marginTop: 30,
    height: 800,
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formBox: {
  },
  paper: {
    height: '100%',
    width: 400,
    padding: theme.spacing.unit,
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
      email: '',
      password: '',
    };
  }
  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.root} alignItems="stretch">
        <Grid item xs={12} >
          <Grid container className={classes.formBox} justify="center" alignItems="center">
            <Paper className={classes.paper}>
              <form noValidate autoComplete="off">
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
                    raised
                    color="primary"
                    className={classes.button}
                  >
          LOGIN
        </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
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
