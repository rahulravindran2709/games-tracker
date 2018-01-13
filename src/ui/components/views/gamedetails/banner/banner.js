import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { ESRB_ICONS, PEGI_ICONS } from 'constants/enums/urls';
import './style.scss';
import GameOptions from './speeddial';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  banner: {
    position: 'relative',
    height: '550px',
    backgroundRepeatX: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    color: '#fff',
  },
  header: {
    position: 'absolute',
    bottom: '110px',
    left: '30%',
    width: '70%',
  },
  shadow: {
    textShadow: '0px 0px 3px #191919,0px 0px 10px #000',
  },
  text: {
    color: '#fff',
  },
});

const getImageCoverUrl = url => url.replace('t_thumb', 't_screenshot_huge');
const getCoverStyle = (cover) => {
  if (!cover) {
    return {};
  }
  const coverUrl = getImageCoverUrl(cover.url);
  return {
    backgroundImage: `url("${coverUrl}")`,
  };
};
const GameDetailsBanner = ({ classes, details: {
  name, cover,
}, selectedEsrb: { rating: esrbRating = '' }, selectedPegi: { rating: pegiRating = '' } }) => (<div className={classes.banner} style={getCoverStyle(cover)}>
  <div className={classes.header}>
    <Grid container className={classes.root}>
      <Grid item md={6}>
        <Typography type="display2" gutterBottom className={classnames(classes.shadow, classes.text)}>{name}</Typography>
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

  <GameOptions />
</div>);

GameDetailsBanner.propTypes = {
  classes: PropTypes.shape().isRequired,
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
