import React from 'react';

import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { gameDetailsInit } from 'actions';
import AddGameDialog from 'components/views/dialogs/addgame';
import AddTimesheetDialog from 'components/views/dialogs/addtimesheetentry';
import GameDetailsBanner from './banner';
import GameDetailsBody from './body';
import selector from './gamedetails.selector';

const propTypes = {
  init: PropTypes.func.isRequired,
  gameDetails: PropTypes.shape(),
  selectedGenres: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  selectedEsrb: PropTypes.shape(),
  selectedPegi: PropTypes.shape(),
  match: PropTypes.shape().isRequired,
  gameCollection: PropTypes.shape(),
};
const defaultProps = {
  gameDetails: null,
  selectedEsrb: {},
  selectedPegi: {},
};

class GameDetailsView extends React.Component {
  componentDidMount() {
    const { init, match: { params: { id } } } = this.props;
    init(1, id);
  }
  shouldComponentUpdate(nextProps) {
    return ((nextProps.match.params.id !== this.props.match.params.id) || !!nextProps.gameDetails);
  }
  render() {
    const { gameDetails, selectedGenres, selectedEsrb, selectedPegi, gameCollection } = this.props;
    return (<Paper>
      <div className="game-details">
        <GameDetailsBanner
          details={gameDetails}
          selectedEsrb={selectedEsrb}
          selectedPegi={selectedPegi}
        />
        <GameDetailsBody
          details={gameDetails}
          genres={selectedGenres}
          collectionDetails={gameCollection}
        />
      </div>
      <AddGameDialog />
      <AddTimesheetDialog />
    </Paper>);
  }
}
GameDetailsView.propTypes = propTypes;
GameDetailsView.defaultProps = defaultProps;

const mapStateToProps = state => selector(state);
const mapDispatchToProps = dispatch =>
  ({
    init: (userId, gameId) => dispatch(gameDetailsInit(userId, gameId)),
  });
const connectHOC = connect(mapStateToProps, mapDispatchToProps);

GameDetailsView.propTypes = propTypes;
GameDetailsView.defaultProps = defaultProps;
export default connectHOC(GameDetailsView);
