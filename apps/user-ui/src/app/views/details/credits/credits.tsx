import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import './credits.css';

/* eslint-disable-next-line */
export interface CreditsProps { }

export const Credits = (props: CreditsProps) => {
  return (
    <Grid container>
      <Grid item xs={9}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h5">Publisher</Typography>
            <Typography variant="body1">SEA</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">Developer</Typography>
            <Typography variant="body1">SEA</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={9}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h5">ESRB</Typography>
            <Typography variant="body1">15</Typography>
            <Typography variant="body2">Some organization which rates stuff according to random principles</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">Pegi</Typography>
            <Typography variant="body1">14</Typography>
            <Typography variant="body2">Some organization which rates stuff according to random principles</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h5">Game Engine</Typography>
        <Typography variant="body1">Unreal</Typography>
      </Grid>
    </Grid>
  );
};

export default Credits;
