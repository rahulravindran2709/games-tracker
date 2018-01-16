import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { InputAdornment } from 'material-ui/Input';
import { DateTimePicker as DateTime } from 'material-ui-pickers';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import DateRange from 'material-ui-icons/DateRange';
import AddAlarm from 'material-ui-icons/AddAlarm';
import AccessTime from 'material-ui-icons/AccessTime';

const styles = (theme) => ({

});
const DateTimePicker = ({ value, onChange, label }) => (
  <div className="picker">
    <DateTime
      value={value}
      onChange={onChange}
      leftArrowIcon={<KeyboardArrowLeft />}
      rightArrowIcon={<KeyboardArrowRight />}
      dateRangeIcon={<DateRange />}
      timeIcon={<AccessTime />}
      label={label}
      fullWidth
      ampm={false}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <AddAlarm />
          </InputAdornment>
        ),
      }}
    />
  </div>);
DateTimePicker.propTypes = {
  value: PropTypes.shape(),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
DateTimePicker.defaultProps = {
  value: new Date(),
};

const withStylesHOC = withStyles(styles);
export default withStylesHOC(DateTimePicker);
