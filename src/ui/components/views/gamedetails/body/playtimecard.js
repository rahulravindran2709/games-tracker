import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import TimesheetList from './timesheetlist';


const AllTimesheets = ({ isOpen }) => (
  <Collapse in={isOpen} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph type="body2">
          All logged times:
        </Typography>
      <TimesheetList />
    </CardContent>
  </Collapse>);
AllTimesheets.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
const styles = theme => ({ expand: {
  transform: 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
},
  expandOpen: {
    transform: 'rotate(180deg)',
  } });
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
      <CardHeader title="Playtime" subheader="Ordered by date" />
      <CardContent>
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
      <AllTimesheets isOpen={isOpen} />
    </Card>);
  }
}

PlaytimeCard.propTypes = propTypes;
const withStylesHOC = withStyles(styles);
export default withStylesHOC(PlaytimeCard);
