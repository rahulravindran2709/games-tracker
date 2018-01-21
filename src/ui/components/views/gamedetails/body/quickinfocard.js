import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Popover from 'material-ui/Popover';
import renderIf from 'render-if';
import { getGameCoverById } from 'actions';
import selector from './quickinfocard.selector';
import { Actions, WebsiteLinks } from './quickinfocard.components';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
};

const getImageCoverUrl = url => url && url.replace('t_thumb', 't_cover_big');
const renderCollectionName = collectionName => () => (<Typography component="p">
  Part of {collectionName}
</Typography>);
const anchorOrigin = { vertical: 'bottom',
  horizontal: 'center' };
const transformOrigin = { vertical: 'center',
  horizontal: 'center' };
class QuickInfoCard extends React.Component {
  state = {
    open: false,
    anchorEl: null,
  }
  componentWillReceiveProps(nextProps) {
    const { gameId: newGameId } = nextProps;
    const { gameId: oldGameId } = this.props;
    if (newGameId && newGameId !== oldGameId) {
      this.props.loadCover(newGameId);
    }
  }
  handleWebsiteClick = (e) => {
    this.setState({
      open: true,
      anchorEl: e.target,
    });
  }
  handleClose = () => {
    this.setState({
      open: false,
    });
  }
  render() {
    const { classes, cover, gameTitle, collectionName, links } = this.props;
    const { anchorEl, open } = this.state;
    return (<div><Card className={classes.card}>
      {renderIf(cover)(() => (<CardMedia
        className={classes.media}
        image={getImageCoverUrl(cover.url)}
        title={gameTitle}
      />))}
      <CardContent>
        <Typography type="headline" component="h2">{gameTitle}</Typography>
        {renderIf(!!collectionName)(renderCollectionName(collectionName))}
      </CardContent>
      <Actions onWebsiteLinkClick={this.handleWebsiteClick} />
    </Card>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorReference={'anchorEl'}
        onClose={this.handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <WebsiteLinks websites={links} /></Popover></div>
    );
  }
}

QuickInfoCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  gameTitle: PropTypes.string,
  collectionName: PropTypes.string,
  gameId: PropTypes.number,
  cover: PropTypes.shape(),
  links: PropTypes.arrayOf(PropTypes.shape()),
  loadCover: PropTypes.func.isRequired,
};
QuickInfoCard.defaultProps = {
  collectionDetails: null,
  gameTitle: '',
  gameId: null,
  cover: null,
  links: null,
  collectionName: null,
};
const withStylesHOC = withStyles(styles);
const mapStateToProps = state => selector(state);
const mapDispatchToProps = dispatch => ({
  loadCover: gameId => dispatch(getGameCoverById(gameId, 'Cover')),
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
export default compose(connectHOC, withStylesHOC)(QuickInfoCard);
