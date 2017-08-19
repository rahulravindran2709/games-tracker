import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Paper from 'material-ui/Paper';
import { GridList, GridListTile } from 'material-ui/GridList';
import { withStyles } from 'material-ui/styles';
import SearchResultItem from './searchresultitem';
import SearchResultHeader from './searchresultheader';

const propTypes = {
  classes: PropTypes.shape().isRequired,
  search: PropTypes.shape().isRequired,
};

const  defaultProps = {
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

class SearchResultsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }
  render() {
    const { classes, search: { results: searchResults } } = this.props;
    return (<Paper elevation={4}>
      <div className={classes.container}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <SearchResultHeader />
          </GridListTile>
          {
          searchResults.map(game => (<GridListTile key={game.id}>
            <SearchResultItem game={game} />
          </GridListTile>))
          }
        </GridList>
      </div>
    </Paper>);
  }
}
SearchResultsView.propTypes = propTypes;
SearchResultsView.defaultProps = defaultProps;
const mapStateToProps = state => ({
  search: state.corereducer.search,
});

const connectHOC = connect(mapStateToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(SearchResultsView);
