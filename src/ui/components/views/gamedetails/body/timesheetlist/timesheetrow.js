import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import {
  TableCell,
  TableRow,
} from 'material-ui/Table';

const TimesheetRow = ({ isSelected, handleClick, handleKeydown, date, timeLogged }) => (
  <TableRow
    hover
    onClick={handleClick}
    onKeyDown={handleKeydown}
    role="checkbox"
    aria-checked={isSelected}
    tabIndex={-1}
    selected={isSelected}
  >
    <TableCell padding="checkbox">
      <Checkbox checked={isSelected} />
    </TableCell>
    <TableCell padding="none">{date}</TableCell>
    <TableCell numeric>{timeLogged}</TableCell>
  </TableRow>);
TimesheetRow.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeydown: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  timeLogged: PropTypes.number.isRequired,
};

export default TimesheetRow;
