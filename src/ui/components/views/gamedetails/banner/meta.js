import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Rating from 'components/widgets/rating';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});
const GameDetailsBanner = ({ classes }) => (<div className="meta">
  <Grid container className={classes.root}>
    <Grid item md={3} />
    <Grid item md={3}>
      <Rating value={3} />
      <Typography type="subheading" className="shadow text"><span className="ratings-text">
                          4.1/5 <span className="reviews-number">(33 reviews)</span>
      </span></Typography>
    </Grid>
    <Grid item md={3}>
      <div className="release-date">
        <Typography type="subheading" className="shadow text">Released 19th July, 2017</Typography>
      </div>
    </Grid>
  </Grid>
  <Grid container className={classes.root}>
    <Grid item md={3}>
      <div className="last-played">
        <Typography type="subheading" className="shadow text">Last played 27th January, 2017</Typography>
      </div>
    </Grid>
    <Grid item md={3}>
      <div className="hours_played">
        <Typography type="subheading" className="shadow text">15 hours spent</Typography>
      </div>
    </Grid>
    <Grid item md={3}>
      <div className="playthroughs">
        <Typography type="subheading" className="shadow text">1 completed playthrough</Typography>
      </div>
    </Grid>
  </Grid>
</div>);
const stylesHOC = withStyles(styles);
export default stylesHOC(GameDetailsBanner);
