import React from 'react';
import PropTypes from 'prop-types';
import {
  TableFooter,
  TablePagination,
  TableRow,
} from 'material-ui/Table';

const TimesheetListFooter = (
  { page, length, rowsPerPage, handleChangePage, handleChangeRowsPerPage }) => (<TableFooter>
    <TableRow>
      <TablePagination
        count={length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableRow>
  </TableFooter>);
TimesheetListFooter.propTypes = {
  page: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
};

export default TimesheetListFooter;
