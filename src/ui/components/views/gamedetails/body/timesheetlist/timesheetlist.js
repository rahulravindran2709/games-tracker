import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import keycode from 'keycode';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import { updateRowInSelectedList } from 'utils';
import TimesheetTableHeader from './header';
import TimesheetToolbar from './toolbar';
import TimesheetRow from './timesheetrow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});
function renderTimesheetRow({ id, date, timeLogged }) {
  const isSelected = this.isSelected(id);
  return (
    <TimesheetRow
      handleClick={event => this.handleClick(event, id)}
      handleKeydown={event => this.handleKeyDown(event, id)}
      isSelected={isSelected}
      key={id}
      date={date}
      timeLogged={timeLogged}
    />
  );
}

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
class EnhancedTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      page: 0,
      rowsPerPage: 5,
    };
  }

  handleRequestSort = (event, newOrderBy) => {
    const { data } = this.props;
    const { orderBy, order } = this.state;
    const newOrder = (orderBy === newOrderBy && order === 'desc') ? 'asc' : 'desc';
    const sortedData =
      newOrder === 'desc'
        ? data.sort((a, b) => (b[newOrderBy] < a[newOrderBy] ? -1 : 1))
        : data.sort((a, b) => (a[newOrderBy] < b[newOrderBy] ? -1 : 1));
    this.setState({ sortedData, order: newOrder, orderBy: newOrderBy });
  };

  handleSelectAllClick = (event, checked) => {
    const { data } = this.props;
    if (checked) {
      this.setState({ selected: data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleKeyDown = (event, id) => {
    if (keycode(event) === 'space') {
      this.handleClick(event, id);
    }
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const newSelected = updateRowInSelectedList(id, selected);
    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes, data } = this.props;
    const { order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, (data.length - page) * rowsPerPage);
    return (
      <Paper className={classes.root}>
        <TimesheetToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TimesheetTableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
                .map(renderTimesheetRow, this)}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TimesheetListFooter
              length={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              handleChangePage={this.handleChangePage}
              handleChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Table>
        </div>
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.shape().isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
const mapStateToProps = ({ gameDetails }) => ({
  data: gameDetails.meta.timesheets,
});
const withStylesHOC = withStyles(styles);
const connectHOC = connect(mapStateToProps);
export default compose(connectHOC, withStylesHOC)(EnhancedTable);
