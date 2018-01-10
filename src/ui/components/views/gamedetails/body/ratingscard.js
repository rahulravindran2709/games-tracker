import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Rating from 'components/widgets/rating';
import ExpandAction from './expandaction';


const styles = () => ({
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
      <ExpandAction
        isOpen={isOpen}
        handleExpandClick={this.handleExpandClick}
      />
      <AllReviews isOpen={isOpen} />
    </Card>);
  }
}

RatingsCard.propTypes = propTypes;

const withStylesHOC = withStyles(styles);
export default withStylesHOC(RatingsCard);
