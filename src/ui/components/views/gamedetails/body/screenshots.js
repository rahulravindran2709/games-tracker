import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import renderIf from 'render-if';
import { connect } from 'react-redux';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import { LinearProgress } from 'material-ui/Progress';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: theme.spacing.unit * 2,
    background: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary[200],
  },
  headline: {
    textAlign: 'left',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});
const renderProgress = screenshots => renderIf(!screenshots || screenshots.length === 0);
const renderScreenshots = screenshots => renderIf(screenshots && screenshots.length > 0);
const ScreenshotSection = ({ screenshots, classes }) => (
  <div className={classes.root}>
    <Grid container>
      <Grid item xs={12}>
        <Typography type="headline" className={classes.headline}>Screenshots</Typography>
      </Grid>
    </Grid>
    {renderProgress(screenshots)(() => (<div className={classes.progress}><LinearProgress color="accent" /></div>))}
    {renderScreenshots(screenshots)(<GridList className={classes.gridList} cols={2.5}>
      {screenshots && screenshots.map(screenshot => (
        <GridListTile key={screenshot.id}>
          <img src={screenshot.url} alt={screenshot.url} />
          <GridListTileBar
            title={'test'}
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
            actionIcon={
              <IconButton>
                <StarBorderIcon className={classes.title} />
              </IconButton>
              }
          />
        </GridListTile>
        ))}
    </GridList>)}
  </div>
);
ScreenshotSection.propTypes = {
  screenshots: PropTypes.arrayOf(PropTypes.shape()),
  classes: PropTypes.shape().isRequired,
};
ScreenshotSection.defaultProps = {
  screenshots: [],
};
const mapStateToProps = ({ gameDetails }) => ({
  screenshots: gameDetails.screenshots,
});
const connectHOC = connect(mapStateToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(ScreenshotSection);
