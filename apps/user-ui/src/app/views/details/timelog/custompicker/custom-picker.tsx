import React, { ReducerAction } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { getDaysInMonth } from 'date-fns';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './custom-picker.css';

/* eslint-disable-next-line */
export interface CustomPickerProps {
  onDateSelect: (value) => void
}
interface PickerState {
  day: string,
  month: string,
  year: string
}
interface PickerAction {
  type: typeof UPDATE_DAY | typeof UPDATE_MONTH | typeof UPDATE_YEAR,
  payload: string
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);
const UPDATE_DAY = 'UPDATE_DAY';
const UPDATE_MONTH = 'UPDATE_MONTH';
const UPDATE_YEAR = 'UPDATE_YEAR';
function reducer(state: PickerState, action: PickerAction) {
  if (!action || !action.type) {
    return state
  }
  switch (action.type) {
    case UPDATE_DAY:
      return { ...state, day: action.payload };
    case UPDATE_MONTH:
      return { ...state, month: action.payload };
    case UPDATE_YEAR:
      return { ...state, year: action.payload };
    default:
      return state;
  }
}
export const CustomPicker = (props: CustomPickerProps) => {
  const { onDateSelect } = props;
  const classes = useStyles();
  const [pickerState, dispatch] = React.useReducer(reducer, {
    year: '',
    month: '',
    day: ''
  });
  const dateSelectHandler = React.useCallback((dateObject) => {
    onDateSelect(dateObject);
  }, []);
  const [maxDaysInMonth, setMaxDaysInMonth] = React.useState(null);
  React.useEffect(() => {
    const dateObj = new Date(Number.parseInt(pickerState.year), (Number.parseInt(pickerState.month) - 1));
    const maxDays = getDaysInMonth(dateObj);
    setMaxDaysInMonth(maxDays);
  }, [pickerState.month, pickerState.year]);
  const handleMonthChange = React.useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: UPDATE_MONTH, payload: event.target.value });
  }, []);
  const handleYearChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: UPDATE_YEAR, payload: event.target.value });
  }, [])
  const handleDayChange = React.useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: UPDATE_DAY, payload: event.target.value });
  }, []);
  const dayMenuItems = React.useMemo(() => {
    if (!maxDaysInMonth) {
      return []
    }
    return Array(maxDaysInMonth).fill(0).map((value, index) => (<MenuItem key={`${index}_day_key`} value={index + 1}>{index + 1}</MenuItem>))
  }, [maxDaysInMonth]);
  const monthMenuItems = React.useMemo(() => {
    return Array(12).fill(0).map((value, index) => (<MenuItem key={`${index}_month_key`} value={index + 1}>{index + 1}</MenuItem>));
  }, []);
  return (
    <div>
      <TextField label={'Year'} value={pickerState.year} onChange={handleYearChange} className={classes.formControl} />
      <FormControl className={classes.formControl}>
        <InputLabel id="month-select-label">Month</InputLabel>
        <Select
          labelId="month-select-label"
          id="month-select"
          value={pickerState.month}
          onChange={handleMonthChange}
          placeholder="Select month"
          disabled={!!!pickerState.year}
        >
          {monthMenuItems}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Day</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pickerState.day}
          onChange={handleDayChange}
          disabled={!!!pickerState.month}
        >
          {dayMenuItems}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomPicker;
