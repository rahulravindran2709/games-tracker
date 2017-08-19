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
const getImageCoverUrl = (url) => url.replace('t_thumb', 't_cover_big')
const SearchResultItem = ({ game }) => (
  <div>
    <img src={getImageCoverUrl(game.cover.url)} alt={game.name} />
    <GridListTileBar
      title={game.name}
      subtitle={
        <span>
         Released: {game.first_release_date}
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
