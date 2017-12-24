import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { loadUserGameData } from 'actions/collections';
import Banner from './banner';
import Meta from './meta';
import Body from './body';
import selector from './dashboard.selector';

const propTypes = {
  classes: PropTypes.shape().isRequired,
  metadata: PropTypes.shape().isRequired,
  collections: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  wishlists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  loadUserGameData: PropTypes.func.isRequired,
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
});

class DashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }
  componentWillMount() {
    this.props.loadUserGameData(1);
  }
  render() {
    const { classes, metadata, collections, wishlists } = this.props;
    return (<div className={classes.container}>
      <Banner userName={'Rahul'} />
      <Meta metadata={metadata} />
      <Paper>
        <Body collections={collections} wishlists={wishlists} />
      </Paper>
    </div>);
  }
}
const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch =>
  ({
    loadUserGameData: userId => dispatch(loadUserGameData(userId)),
  });
DashboardView.propTypes = propTypes;
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(DashboardView);
