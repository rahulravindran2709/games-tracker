import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import SynopsisContent from './synopsis/synopsis';
import CreditContent from './credits/credits';
import MediaContent from './media/media';
import SidebarContent from './sidebar/sidebar';
import './details.css';


const useDetailsStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  tabContent: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  bannerImage: {
    maxWidth: '100%'
  },
  banner: {
    position: 'relative'
  },
  gameTitle: {
    position: 'absolute',
    color: '#fff',
    bottom: '0'
  },
  gamePlatform: {
    position: 'absolute',
    bottom: '0',
    right: 0,
    color: '#fff'
  }
}));
/* eslint-disable-next-line */
export interface DetailsProps { }

export const Details = (props: DetailsProps) => {
  const classes = useDetailsStyles();
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = React.useCallback((event, newValue: string) => {
    setValue(newValue);
    history.push(newValue)
  }, [history]);
  return (
    <Paper className={classes.root}>
      <div className={classes.banner}>
        <img className={classes.bannerImage} src="https://images8.alphacoders.com/710/710329.jpg" />
        <Typography variant="h1" className={classes.gameTitle}>God of War</Typography>
        <Typography variant="h5" className={classes.gamePlatform}>PS4 23rd July, 2019</Typography>
      </div>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Synopsis" value="/details/synopsis" />
              <Tab label="Media" value="/details/media" />
              <Tab label="Credits" value="/details/credits" />
            </Tabs>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Paper variant={'outlined'} className={classes.tabContent}>
            <Switch>
              <Route path="/details/synopsis" render={() => (<SynopsisContent />)} />
              <Route path="/details/media" render={() => (<MediaContent />)} />
              <Route path="/details/credits" render={() => (<CreditContent />)} />
            </Switch>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SidebarContent />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Details;
