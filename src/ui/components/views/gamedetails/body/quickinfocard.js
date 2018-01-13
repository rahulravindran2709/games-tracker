import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import renderIf from 'render-if';

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
      Learn More
    </Button>
</CardActions>);
const getImageCoverUrl = url => url && url.replace('t_thumb', 't_cover_big');
const QuickInfoCard = ({ cover,  classes, gameTitle, collectionDetails }) => {
  const renderImage = renderIf(cover && cover.url);
  return (
    <div>
      <Card className={classes.card}>
        {renderImage(() => (<CardMedia
          className={classes.media}
          image={getImageCoverUrl(cover.url)}
          title={gameTitle}
        />))}
        <CardContent>
          <Typography type="headline" component="h2">
            {gameTitle}
          </Typography>
          {
            renderIf(collectionDetails && collectionDetails.length > 0)(() =>
            (<Typography component="p">
                Part of {collectionDetails[0].collection_name}
            </Typography>))
          }
        </CardContent>
        <Actions />
      </Card>
    </div>
    );
};

QuickInfoCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  gameTitle: PropTypes.string.isRequired,
  collectionDetails: PropTypes.arrayOf(PropTypes.shape()),
};
QuickInfoCard.defaultProps = {
  collectionDetails: null,
};

export default withStyles(styles)(QuickInfoCard);
