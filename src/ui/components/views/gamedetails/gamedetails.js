import React from 'react';

import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGameById } from 'actions';
import AddGameDialog from 'components/views/dialogs/addgame';
import GameDetailsBanner from './banner';
import GameDetailsBody from './body';
import selector from './gamedetails.selector';

const propTypes = {
  getGameDetailsWithId: PropTypes.func.isRequired,
  gameDetails: PropTypes.shape(),
  selectedGenres: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  selectedEsrb: PropTypes.shape(),
  selectedPegi: PropTypes.shape(),
  match: PropTypes.shape().isRequired,
};
const defaultProps = {
  gameDetails: {},
  selectedEsrb: {},
  selectedPegi: {},
};
const getImageCoverUrl = url => url.replace('t_thumb', 't_screenshot_big');
class GameDetailsView extends React.Component {
  componentDidMount() {
    const { getGameDetailsWithId, match: { params: { id } } } = this.props;
    getGameDetailsWithId(id);
  }
  shouldComponentUpdate(nextProps) {
    return ((nextProps.match.params.id !== this.props.match.params.id) || !!nextProps.gameDetails);
  }
  render() {
    const { gameDetails, selectedGenres, selectedEsrb, selectedPegi } = this.props;
    return (<Paper>
      <div className="game-details">
        <GameDetailsBanner
          details={gameDetails}
          selectedEsrb={selectedEsrb}
          selectedPegi={selectedPegi}
        />
        <GameDetailsBody details={gameDetails} genres={selectedGenres} />
      </div>
      <AddGameDialog />
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
