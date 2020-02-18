import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import CustomPicker from './custompicker/custom-picker';


import './timelog.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
    container: {
      display: 'flex',
      width: '100%',
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      width: '100%',
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);


/* eslint-disable-next-line */
export interface TimelogProps { }
interface BrokenDate {
  day: number,
  month: number,
  year: number
}
export const Timelog = (props: TimelogProps) => {

  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };
  const [completed, setCompleted] = React.useState(true);
  const [completedDate, setCompletedDate] = React.useState(null);
  const handleCompletionDateChange = React.useCallback((value: BrokenDate) => {
    setCompletedDate(value);
  }, [])
  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />

      <Grow in={checked}
        style={{ transformOrigin: '100% 0' }}
        {...(checked ? { timeout: 1000 } : {})}>
        <div className={classes.container}>

          <Paper elevation={4} className={classes.paper}>
            <FormControl>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Completed ?"
                labelPlacement="end"
              />
            </FormControl>
            <CustomPicker onDateSelect={handleCompletionDateChange} />
            <Button variant={'contained'} color={'primary'}>Save Progress</Button>
          </Paper>
        </div>
      </Grow>

    </div >
  );
};

export default Timelog;

