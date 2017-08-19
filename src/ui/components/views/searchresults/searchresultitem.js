import React from 'react';
import PropTypes from 'prop-types';
import { GridListTileBar } from 'material-ui/GridList';
import InfoIcon from 'material-ui-icons/Info';
import IconButton from 'material-ui/IconButton';

const propTypes = {
  game: PropTypes.shape(),
};

const defaultProps = {
  game: {},
};

const SearchResultItem = ({ game }) => (
  <div>
    <img src="http://via.placeholder.com/250x200" alt="someimage" />
    <GridListTileBar
      title="My title"
      subtitle={
        <span>
         by: "Author"
       </span>
     }
      actionIcon={
        <IconButton>
          <InfoIcon color="rgba(255, 255, 255, 0.54)" />
        </IconButton>
     }
   />
  </div>
);

SearchResultItem.propTypes = propTypes;
SearchResultItem.defaultProps = defaultProps;
export default SearchResultItem;
