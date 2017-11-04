import React from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGameById } from 'actions';

import GameDetailsBanner from './banner';
import GameDetailsBody from './body';
import selector from './gamedetails.selector';
import style from './style.scss';

const propTypes = {
  id: PropTypes.string.isRequired,
  getGameDetailsWithId: PropTypes.func.isRequired,
  gameDetails: PropTypes.shape(),
  selectedGenres: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  selectedEsrb: PropTypes.shape(),
  selectedPegi: PropTypes.shape(),
};
const defaultProps = {
  gameDetails: {},
  selectedEsrb: {},
  selectedPegi: {},
};
const getImageCoverUrl = url => url.replace('t_thumb', 't_screenshot_big');
class GameDetailsView extends React.Component {
  componentWillMount() {
    const { getGameDetailsWithId, id } = this.props;
    getGameDetailsWithId(id);
  }

  render() {
    const { gameDetails, selectedGenres, selectedEsrb, selectedPegi } = this.props;
    console.log(this.props, 'this.props')
    return (<Paper>
      <div className="game-details">
        <GameDetailsBanner
          details={gameDetails}
          selectedEsrb={selectedEsrb}
          selectedPegi={selectedPegi}
        />
        <GameDetailsBody details={gameDetails} genres={selectedGenres} />
      </div>
    </Paper>);
  }
}
GameDetailsView.propTypes = propTypes;
GameDetailsView.defaultProps = defaultProps;

const mapStateToProps = state => selector(state);
const mapDispatchToProps = dispatch =>
  ({
    getGameDetailsWithId: id => dispatch(getGameById(id)),
  });
const connectHOC = connect(mapStateToProps, mapDispatchToProps);

GameDetailsView.propTypes = propTypes;
GameDetailsView.defaultProps = defaultProps;
export default connectHOC(GameDetailsView);
