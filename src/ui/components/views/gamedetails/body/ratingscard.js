import React from 'react';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import { isNil } from 'ramda';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Rating from 'components/widgets/rating';
import { CircularProgress } from 'material-ui/Progress';
import ExpandAction from './expandaction';


const styles = () => ({
});
const propTypes = {
  classes: PropTypes.shape().isRequired,
  score: PropTypes.number,
  ratingCount: PropTypes.number,
};
const defaultProps = {
  score: null,
  ratingCount: null,
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
const Progress = () => (<CircularProgress color="accent" />);
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
    const { classes, score, ratingCount } = this.props;
    const { isOpen } = this.state;
    const renderProgressBar = renderIf((isNil(score) || isNil(ratingCount)));
    const renderContent = renderIf(score && ratingCount);
    return (<Card>
      <CardHeader title="User reviews" subheader="Ordered by date" />
      <CardContent>
        {renderProgressBar(<Progress />)}
        {renderContent(<div><Rating value={4} />
          <Typography type="subheading" className={classes.shadow}>
            <span className="ratings-text">{score && score.toFixed(2)}/100 <span className="reviews-number">({ratingCount} ratings)</span></span>
          </Typography></div>)}
      </CardContent>
      {renderContent(<ExpandAction
        isOpen={isOpen}
        handleExpandClick={this.handleExpandClick}
      />)}
      {renderContent(<AllReviews isOpen={isOpen} />)}
    </Card>);
  }
}

RatingsCard.propTypes = propTypes;
RatingsCard.defaultProps = defaultProps;

const withStylesHOC = withStyles(styles);
export default withStylesHOC(RatingsCard);
