import React from 'react';
import PropTypes from 'prop-types';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import { withStyles } from 'material-ui/styles';


const propTypes = {
  classes: PropTypes.shape().isRequired,
  collections: PropTypes.arrayOf(PropTypes.shape()),
};

const defaultProps = {
  collections: [],
};
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

const Slider = ({ classes, collections }) => (
  <div className={classes.root}>
    <Typography type="headline">Collections</Typography>
    <GridList className={classes.gridList} cols={2.5}>
      {collections.map(({ id, url, name }) => (
        <GridListTile key={id}>
          <img src={url} alt={url} />
          <GridListTileBar
            title={name}
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
  </div>);

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;
const stylesHOC = withStyles(styles);
export default stylesHOC(Slider);
