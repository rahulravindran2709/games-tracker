import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './synopsis.css';

/* eslint-disable-next-line */
export interface SynopsisProps { }

export const Synopsis = (props: SynopsisProps) => {
  return (

    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5">Summary</Typography>
        <Typography variant="body1">Sumary of the story is given here</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Description</Typography>
        <Typography variant="body1">A very long description is givven her eand a lot of things</Typography>
      </Grid>
    </Grid>
  );
};

export default Synopsis;
