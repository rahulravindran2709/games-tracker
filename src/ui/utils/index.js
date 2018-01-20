import { STORAGE_NAME } from 'constants/auth';
import { compose, prop } from 'ramda';
import moment from 'moment';

export const getAuthToken = () => {
  const authObject = localStorage.getItem(STORAGE_NAME);
  if (!authObject) {
    return null;
  }
  return compose(prop('token'), JSON.parse)(authObject);
};

export const updateRowInSelectedList = (id, selectedList) => {
  const selectedIndex = selectedList.indexOf(id);
  let newSelected = [];
  // If id is not part of list then concat it
  if (selectedIndex === -1) {
    newSelected = newSelected.concat(selectedList, id);
  } else if (selectedIndex === 0) {
    // if its first element then strip first element
    newSelected = newSelected.concat(selectedList.slice(1));
  } else if (selectedIndex === selectedList.length - 1) {
    // If its last element then remove last element
    newSelected = newSelected.concat(selectedList.slice(0, -1));
  } else if (selectedIndex > 0) {
    // Any other element index, then slice before and after
    newSelected = newSelected.concat(
      selectedList.slice(0, selectedIndex), selectedList.slice(selectedIndex + 1),
    );
  }
  return newSelected;
};
const DATE_FORMAT_LONG = 'Do MMM, YYYY HH:mm';
export const formatDate = unformattedDate => moment(unformattedDate).format(DATE_FORMAT_LONG);
export const convertToHoursDuration = time => moment.duration(parseInt(time, 10)).as('hours').toFixed(2);
