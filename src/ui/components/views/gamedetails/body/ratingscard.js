import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Rating from 'components/widgets/rating';


const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});
const propTypes = {
  classes: PropTypes.shape().isRequired,
};

const AllReviews = ({ isOpen }) => (
  <Collapse in={isOpen} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph type="body2">
          All reviews:
        </Typography>
      <Typography paragraph>
          Not that good
        </Typography>
    </CardContent>
  </Collapse>);
AllReviews.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
class RatingsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  handleExpandClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { classes } = this.props;
    const { isOpen } = this.state;
    return (<Card>
      <CardHeader title="User reviews" subheader="Ordered by date" />
      <CardContent>
        <Rating value={4} />
        <Typography type="subheading" className={classes.shadow}>
          <span className="ratings-text">4.1/5 <span className="reviews-number">(33 reviews)</span></span>
        </Typography>
      </CardContent>
      <CardActions disableActionSpacing>
        <IconButton
          className={classnames(classes.expand, { [classes.expandOpen]: isOpen })}
          onClick={this.handleExpandClick}
          aria-expanded={isOpen}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <AllReviews isOpen={isOpen} />
    </Card>);
  }
}

RatingsCard.propTypes = propTypes;

const withStylesHOC = withStyles(styles);
export default withStylesHOC(RatingsCard);
