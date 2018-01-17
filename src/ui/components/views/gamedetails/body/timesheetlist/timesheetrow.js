import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import {
  TableCell,
  TableRow,
} from 'material-ui/Table';
import { formatDate } from 'utils';

const TimesheetRow = (
  { isSelected, handleClick, handleKeydown, startTime, endTime, timeTaken }) => (
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
      <TableCell padding="none">{formatDate(startTime)}</TableCell>
      <TableCell padding="none">{formatDate(endTime)}</TableCell>
      <TableCell padding="none">{timeTaken}</TableCell>
    </TableRow>);
TimesheetRow.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeydown: PropTypes.func.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  timeTaken: PropTypes.number.isRequired,
};

export default TimesheetRow;
