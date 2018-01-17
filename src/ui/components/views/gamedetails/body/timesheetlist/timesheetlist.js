import React from 'react';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import keycode from 'keycode';
import Table, {
  TableBody,
  TableCell,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
import { isNil } from 'ramda';
import { getTimesheetEntries } from 'actions/timesheet';
import { updateRowInSelectedList } from 'utils';
import TimesheetTableHeader from './header';
import TimesheetToolbar from './toolbar';
import TimesheetRow from './timesheetrow';
import TimesheetListFooter from './footer';

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
function renderTimesheetRow({ timesheetId, timesheetIn, timesheetOut }) {
  const isSelected = this.isSelected(timesheetId);
  return (
    <TimesheetRow
      handleClick={event => this.handleClick(event, timesheetId)}
      handleKeydown={event => this.handleKeyDown(event, timesheetId)}
      isSelected={isSelected}
      key={timesheetId}
      startTime={timesheetIn}
      endTime={timesheetOut}
    />
  );
}
const progressStyles = () => ({
  progress: {
    textAlign: 'center',
  },
});
let Progress = ({ classes }) => (<TableBody>
  <TableRow>
    <TableCell colSpan={6} className={classes.progress}>
      <CircularProgress color="accent" />
    </TableCell>
  </TableRow>
</TableBody>);
Progress = withStyles(progressStyles)(Progress);
class EnhancedTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      order: 'asc',
      orderBy: 'timesheetIn',
      selected: [],
      page: 0,
      rowsPerPage: 5,
    };
  }
  componentDidMount() {
    const { gameId, collectionId } = this.props;
    this.props.getTimesheetData(collectionId, gameId);
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
    const renderProgressBar = renderIf(isNil(data));
    const renderTable = renderIf(!!data);
    const count = data ? data.length : 0;
    const emptyRows = data ?
    (rowsPerPage - Math.min(rowsPerPage, (count - page) * rowsPerPage)) : 0;
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
              rowCount={count}
            />
            {renderProgressBar(() => <Progress />)}
            {renderTable(() => (<TableBody>
              {data.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
                .map(renderTimesheetRow, this)}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>))}
            <TimesheetListFooter
              length={count}
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
  data: PropTypes.arrayOf(PropTypes.shape()),
  getTimesheetData: PropTypes.func.isRequired,
};
EnhancedTable.defaultProps = {
  data: null,
};
const mapStateToProps = ({ gameDetails }) => ({
  data: gameDetails.meta.timesheets,
  gameId: gameDetails.details.id,
  collectionId: gameDetails.collectionDetails.collectionId,
});
const mapDispatchToProps = dispatch => ({
  getTimesheetData: (collectionId, gameId) => dispatch(getTimesheetEntries(collectionId, gameId)),
});
const withStylesHOC = withStyles(styles);
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
export default compose(connectHOC, withStylesHOC)(EnhancedTable);
