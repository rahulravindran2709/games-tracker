import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { ESRB_ICONS, PEGI_ICONS } from 'constants/enums/urls';
import style from './style.scss';
import GameDetailsBannerMeta from './meta'
import GameOptions from './speeddial';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});


const GameDetailsBanner = ({ classes, details: {
  name,
  first_release_date,
}, selectedEsrb: { rating: esrbRating = '' }, selectedPegi: { rating: pegiRating = '' } }) => (<div className="banner">
  <div className="header">
    <Grid container className={classes.root}>
      <Grid item md={6}>
        <Typography type="display2" gutterBottom className="shadow text">{name}</Typography>
      </Grid>
      <Grid item md={1}>
        <div className="ageRatings">
          <h1>
            {PEGI_ICONS[pegiRating] && <a title="By PEGI, extrahiert von StG1990 [Public domain], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3APEGI_18.svg">
              <img
                width={16}
                alt={PEGI_ICONS[pegiRating].altText}
                src={PEGI_ICONS[pegiRating].url}
              />
            </a>}
            {
              ESRB_ICONS[esrbRating] && <a title="By Entertainment Software Association (Personal correspondence) [Public domain], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3AESRB_2013_Rating_Pending.svg">
                <img
                  width={16}
                  alt={ESRB_ICONS[esrbRating].altText}
                  src={ESRB_ICONS[esrbRating].url}
                />
              </a>
            }
          </h1>
        </div>
      </Grid>
    </Grid>
  </div>
  <GameDetailsBannerMeta details={{ releaseDate: first_release_date }} />
  <div className="actions">
    <GameOptions />
  </div>
</div>);

GameDetailsBanner.propTypes = {
  details: PropTypes.shape().isRequired,
  selectedEsrb: PropTypes.shape(),
  selectedPegi: PropTypes.shape(),
};

GameDetailsBanner.defaultProps = {
  selectedEsrb: {},
  selectedPegi: {},
};

const stylesHOC = withStyles(styles);
export default stylesHOC(GameDetailsBanner);
