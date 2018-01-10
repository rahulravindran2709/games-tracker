import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import TimesheetList from './timesheetlist';
import ExpandAction from './expandaction';

const AllTimesheets = ({ isOpen }) => (
  <Collapse in={isOpen} timeout="auto" unmountOnExit>
    <Typography paragraph type="body2">
          Last played: 27th September, 2017
        </Typography>
    <TimesheetList />
  </Collapse>);
AllTimesheets.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
const styles = () => ({ });
const propTypes = {
  classes: PropTypes.shape().isRequired,
};
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
    const { classes } = this.props;
    const { isOpen } = this.state;
    return (<Card>
      <CardHeader title="Your effort" subheader="Ordered by date" />
      <CardContent>
        <Typography type="subheading" className={classes.shadow}>
          2 completed playthroughs
        </Typography>
        <Typography type="subheading" className={classes.shadow}>
          You spent a total of 15 hours on this game
        </Typography>
      </CardContent>
      <ExpandAction
        isOpen={isOpen}
        handleExpandClick={this.handleExpandClick}
      />
      <AllTimesheets isOpen={isOpen} />
    </Card>);
  }
}

PlaytimeCard.propTypes = propTypes;
const withStylesHOC = withStyles(styles);
export default withStylesHOC(PlaytimeCard);
