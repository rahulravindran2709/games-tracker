import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import style from './style.scss';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});
const GameDetailsBanner = ({ classes }) => (<div className="banner">
  <div className="header">
    <Grid container className={classes.root}>
      <Grid item md={6}>
        <Typography type="display2" gutterBottom className="shadow text">Storm blade</Typography>
      </Grid>
      <Grid item md={1}>
        <div className="ageRatings">
          <h1>
            <a title="By PEGI, extrahiert von StG1990 [Public domain], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3APEGI_18.svg">
              <img width={16} alt="PEGI 18" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/PEGI_18.svg/16px-PEGI_18.svg.png" />
            </a>
            <a title="By Entertainment Software Association (Personal correspondence) [Public domain], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3AESRB_2013_Rating_Pending.svg">
              <img width={16} alt="ESRB 2013 Rating Pending" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/ESRB_2013_Rating_Pending.svg/16px-ESRB_2013_Rating_Pending.svg.png" /></a>
          </h1>
        </div>
      </Grid>
    </Grid>
  </div>
  <div className="meta">
    <Grid container className={classes.root}>
      <Grid item md={3} />
      <Grid item md={3}>
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
  </div>
  <div className="game-details__actions">
    <button className="mui-btn mui-btn--fab mui-btn--primary">+</button>
  </div>
</div>);
const stylesHOC = withStyles(styles);
export default stylesHOC(GameDetailsBanner);
