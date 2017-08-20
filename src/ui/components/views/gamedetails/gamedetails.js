import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGameById } from 'actions';

const propTypes = {
  id: PropTypes.string.isRequired,
  getGameDetailsWithId: PropTypes.func.isRequired,
};
const defaultProps = {};
class GameDetailsView extends React.Component {
  componentWillMount() {
    const { getGameDetailsWithId, id } = this.props;
    getGameDetailsWithId(id);
  }
  render() {
    return (<div> Game details </div>);
  }
}
GameDetailsView.propTypes = propTypes;
GameDetailsView.defaultProps = defaultProps;
const mapStateToProps = state => ({
  gameDetails: state.gameDetails.details,
});
const mapDispatchToProps = dispatch =>
  ({
    getGameDetailsWithId: id => dispatch(getGameById(id)),
  });
const connectHOC = connect(mapStateToProps, mapDispatchToProps);

GameDetailsView.propTypes = propTypes;
GameDetailsView.defaultProps = defaultProps;
export default connectHOC(GameDetailsView);
