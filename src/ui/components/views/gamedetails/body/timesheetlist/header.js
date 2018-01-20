import React from 'react';
import PropTypes from 'prop-types';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Tooltip from 'material-ui/Tooltip';
import Checkbox from 'material-ui/Checkbox';

const columnData = [
  { id: 'startTime', numeric: false, disablePadding: true, label: 'Start time' },
  { id: 'endTime', numeric: false, disablePadding: true, label: 'End time' },
  { id: 'timeSpent', numeric: false, disablePadding: true, label: 'Time spent' },
];
const propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
const TimesheetHeaderRow = (
  { column: { id, numeric, label, disablePadding }, orderBy, order,
handleSortLabelClick }) => (<TableCell
  key={id}
  numeric={numeric}
  padding={disablePadding ? 'none' : 'default'}
  sortDirection={orderBy === id ? order : false}
>
  <Tooltip
    title="Sort"
    placement={numeric ? 'bottom-end' : 'bottom-start'}
    enterDelay={300}
  >
    <TableSortLabel
      active={orderBy === id}
      direction={order}
      onClick={handleSortLabelClick}
    >
      {label}
    </TableSortLabel>
  </Tooltip>
</TableCell>);
TimesheetHeaderRow.propTypes = {
  column: PropTypes.shape().isRequired,
  orderBy: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  handleSortLabelClick: PropTypes.func.isRequired,
};
class TimesheetTableHeader extends React.Component {
  createSortHandler = property => (event) => {
    this.props.onRequestSort(event, property);
  };
  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {columnData.map(column => (
            <TimesheetHeaderRow
              key={column.id}
              column={column}
              orderBy={orderBy}
              order={order}
              handleSortLabelClick={this.createSortHandler(column.id)}
            />
            ), this)}
        </TableRow>
      </TableHead>
    );
  }
}

TimesheetTableHeader.propTypes = propTypes;
export default TimesheetTableHeader;
