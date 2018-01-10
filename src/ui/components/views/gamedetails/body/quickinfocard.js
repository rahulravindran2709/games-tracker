import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

const QuickInfoCard = ({ classes, gameTitle }) => (
  <div>
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
        title={gameTitle}
      />
      <CardContent>
        <Typography type="headline" component="h2">
          {gameTitle}
        </Typography>
        <Typography component="p">
            Part of Test Collection
          </Typography>
      </CardContent>
      <CardActions>
        <Button dense color="primary">
            Share
          </Button>
        <Button dense color="primary">
            Learn More
          </Button>
      </CardActions>
    </Card>
  </div>
  );

QuickInfoCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  gameTitle: PropTypes.string.isRequired,
};

export default withStyles(styles)(QuickInfoCard);
