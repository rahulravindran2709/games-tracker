import React from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating'
import './sidebar.css';

const useSidebarStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  }
}))
/* eslint-disable-next-line */
export interface SidebarProps { }

export const Sidebar = (props: SidebarProps) => {
  const classes = useSidebarStyles();
  return (
    <Paper variant={'outlined'} className={classes.root}>
      <Typography variant="h6">Genres:</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Chip variant="outlined" color="primary" avatar={<Avatar>F</Avatar>} label="Third Person" />
        </Grid>
        <Grid item xs={6}>
          <Chip variant="outlined" color="primary" avatar={<Avatar>F</Avatar>} label="First Person" />
        </Grid>
        <Grid item xs={6}>
          <Chip variant="outlined" color="primary" avatar={<Avatar>F</Avatar>} label="Adventure" />
        </Grid>
      </Grid>
      <Typography variant="h6">Metacritic:</Typography>
      <Grid container>
        <Grid item xs={12}>
          <Rating max={10} name={"metaCritic"} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Sidebar;
