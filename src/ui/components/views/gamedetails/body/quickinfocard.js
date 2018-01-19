import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import renderIf from 'render-if';
import { getGameCoverById } from 'actions';
import selector from './quickinfocard.selector';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
};

const Actions = () => (<CardActions>
  <Button dense color="primary">
      Share
    </Button>
  <Button dense color="primary">
      Visit Website
    </Button>
</CardActions>);
const getImageCoverUrl = url => url && url.replace('t_thumb', 't_cover_big');
class QuickInfoCard extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { gameId: newGameId } = nextProps;
    const { gameId: oldGameId } = this.props;
    if (newGameId && newGameId !== oldGameId) {
      this.props.loadCover(newGameId);
    }
  }
  render() {
    const { classes, cover, gameTitle, gameId, collectionName } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          {renderIf(cover)(() => (<CardMedia
            className={classes.media}
            image={getImageCoverUrl(cover.url)}
            title={gameTitle}
          />))}
          <CardContent>
            <Typography type="headline" component="h2">
              {gameTitle}
            </Typography>
            {
              renderIf(!!collectionName)(() =>
              (<Typography component="p">
                  Part of {collectionName}
              </Typography>))
            }
          </CardContent>
          <Actions />
        </Card>
      </div>
    );
  }
}

QuickInfoCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  gameTitle: PropTypes.string,
  collectionName: PropTypes.string,
  gameId: PropTypes.number,
};
QuickInfoCard.defaultProps = {
  collectionDetails: null,
  gameTitle: '',
  gameId: null,
  collectionName: null,
};
const withStylesHOC = withStyles(styles);
const mapStateToProps = state => selector(state);
const mapDispatchToProps = dispatch => ({
  loadCover: gameId => dispatch(getGameCoverById(gameId, 'Cover')),
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
export default compose(connectHOC, withStylesHOC)(QuickInfoCard);
