import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import moment from 'moment';
import { path, isEmpty, complement } from 'ramda';
import renderIf from 'render-if';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import TimesheetList from './timesheetlist';
import ExpandAction from './expandaction';
import selector from './playtimecard.selector';

const AllTimesheets = ({ isOpen, lastPlayed }) => (
  <Collapse in={isOpen} timeout={1000} unmountOnExit>
    {
      renderIf(lastPlayed)(() => (<Typography paragraph type="body2">
            Last played: {moment(lastPlayed).fromNow()}
      </Typography>))
    }
    <TimesheetList />
  </Collapse>);
AllTimesheets.propTypes = {
  lastPlayed: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
};
AllTimesheets.defaultProps = {
  lastPlayed: null,
};
const styles = () => ({ });
const propTypes = {
  classes: PropTypes.shape().isRequired,
  gameId: PropTypes.number,
  metadata: PropTypes.shape(),
};
const defaultProps = {
  gameId: null,
  metadata: null,
};
const renderEmptyCardContent = metadata => renderIf(isEmpty(metadata));
const renderCardContent = metadata => renderIf(metadata !== null);
const PlaytimeCardContent = ({ playthroughs, totalTimeSpent }) => (<CardContent>
  {renderIf(playthroughs > 0)(() => <Typography type="subheading">{playthroughs} completed playthroughs</Typography>)}
  {renderIf(playthroughs === 0)(() => <Typography type="subheading">You havent completed this game yet. Get to it!</Typography>)}
  <Typography type="subheading">
    You spent a total of {moment.duration(parseInt(totalTimeSpent, 10)).as('hours').toFixed(2)} hours on this game
  </Typography>
</CardContent>);
const EmptyCardContent = () => (<CardContent>
  <Typography type="subheading" className={shadow}>
    It seems you havent played this game yet. Add this game to a collection and start tracking time
  </Typography>
</CardContent>);
class PlaytimeCard extends React.Component {
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
    const { classes, metadata } = this.props;
    const { isOpen } = this.state;
    return (<Card>
      <CardHeader title="Your effort" subheader="Ordered by date" />
      {renderEmptyCardContent(metadata)(() => (<EmptyCardContent />))}
      {renderCardContent(metadata)(() => (<Fragment><PlaytimeCardContent
        playthroughs={metadata.playthroughs}
        totalTimeSpent={metadata.totalTimeTaken}
      />
        <ExpandAction
          isOpen={isOpen}
          handleExpandClick={this.handleExpandClick}
        />
        <AllTimesheets isOpen={isOpen} lastPlayed={metadata.lastPlayed} /></Fragment>))}

    </Card>);
  }
}

const mapStateToProps = state => selector(state);
const connectHOC = connect(mapStateToProps);
PlaytimeCard.propTypes = propTypes;
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(PlaytimeCard);
