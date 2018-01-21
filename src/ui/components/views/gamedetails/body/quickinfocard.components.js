import React from 'react';
import PropTypes from 'prop-types';
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import { CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';

const descriptionMap = {
  Wikipedia: 'Free online encyclopedia',
  Wikia: 'Wiki hosting service',
  Steam: 'Popular onine storefront',
};
export const WebsiteLinks = ({ websites }) => (<List dense>
  {
    websites && websites.map(website => (<ListItem key={website.id} button>
      <a target={'_blank'} href={website.url}><ListItemText
        primary={website.type}
        secondary={descriptionMap[website.type] || ''}
      /></a>
    </ListItem>))
  }
</List>);
WebsiteLinks.propTypes = {
  websites: PropTypes.arrayOf(PropTypes.shape()),
};
WebsiteLinks.defaultProps = {
  websites: null,
};
export const Actions = ({ onWebsiteLinkClick }) => (<CardActions>
  <Button dense color="primary">
      Share
    </Button>
  <Button dense color="primary" onTouchTap={onWebsiteLinkClick}>
      Visit Website
    </Button>
</CardActions>);

Actions.propTypes = {
  onWebsiteLinkClick: PropTypes.func.isRequired,
};
