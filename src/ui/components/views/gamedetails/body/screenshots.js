import React from 'react';
import PropTypes from 'prop-types';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary[200],
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});
const ScreenshotSection = ({ screenshots, classes }) => (
  <div className={classes.root}>
    <GridList className={classes.gridList} cols={2.5}>
      {screenshots.map(screenshot => (
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
    </GridList>
  </div>
);
ScreenshotSection.propTypes = {
  screenshots: PropTypes.arrayOf(PropTypes.shape()),
  classes: PropTypes.shape().isRequired,
};
ScreenshotSection.defaultProps = {
  screenshots: [],
};
const stylesHOC = withStyles(styles);
export default stylesHOC(ScreenshotSection);
