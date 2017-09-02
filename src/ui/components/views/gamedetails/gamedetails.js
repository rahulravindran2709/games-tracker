import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGameById } from 'actions';
import style from './style.scss';

const propTypes = {
  id: PropTypes.string.isRequired,
  getGameDetailsWithId: PropTypes.func.isRequired,
};
const defaultProps = {};
const getImageCoverUrl = url => url.replace('t_thumb', 't_screenshot_big');
class GameDetailsView extends React.Component {
  componentWillMount() {
    const { getGameDetailsWithId, id } = this.props;
    getGameDetailsWithId(id);
  }

  render() {
    const { gameDetails } = this.props;
    console.log(gameDetails);
    return (<Paper><div className="gameDetailsBanner" ><Typography type="headline" component="h1" className="gameDetailsHeader">
      {gameDetails.name}
    </Typography>
      <img style={{ width: '100%', height: '500px' }} src={getImageCoverUrl(gameDetails.cover.url)} alt={gameDetails.name} />
    </div>
    </Paper>);
  }
}
GameDetailsView.propTypes = propTypes;
GameDetailsView.defaultProps = defaultProps;
const mapStateToProps = (state) => {
  console.log(state.gameDetails);
  return ({
    gameDetails: state.gameDetails.details,
  });
};
const mapDispatchToProps = dispatch =>
  ({
    getGameDetailsWithId: id => dispatch(getGameById(id)),
  });
const connectHOC = connect(mapStateToProps, mapDispatchToProps);

GameDetailsView.propTypes = propTypes;
GameDetailsView.defaultProps = defaultProps;
export default connectHOC(GameDetailsView);
