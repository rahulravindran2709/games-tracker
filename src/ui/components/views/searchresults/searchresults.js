import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { GridList, GridListTile } from 'material-ui/GridList';
import { withStyles } from 'material-ui/styles';
import SearchResultItem from './searchresultitem';
import SearchResultHeader from './searchresultheader';

const propTypes = {
  classes: PropTypes.shape().isRequired,
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

const SearchResultList = ({ results }) => {
  return results && results.map((game) => (<GridListTile>
    <SearchResultItem game={game} />
  </GridListTile>)
);
};
class SearchResultsView extends React.Component {
  render() {
    const { classes, results } = this.props;
    return (<Paper elevation={4}>
      <div className={classes.container}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <SearchResultHeader />
          </GridListTile>
          <SearchResultList results={results} />
        </GridList>
      </div>
    </Paper>);
  }
}
SearchResultsView.propTypes = propTypes;
SearchResultsView.defaultProps = defaultProps;
export default withStyles(styles)(SearchResultsView);
