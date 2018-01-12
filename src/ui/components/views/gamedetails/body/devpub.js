import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { getCompanyById } from 'actions/enums';
import CompanyChip from './companychip';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});
const GridText = ({ heading }) => (<Grid item md={3}>
  <Typography type="button">{heading}</Typography>
</Grid>);
GridText.propTypes = {
  heading: PropTypes.string.isRequired,
};
class DevPublGrid extends React.Component {
  componentDidMount() {
    const { publisherIds, developerIds } = this.props;
    this.props.getDeveloperAndPublisherDetails(publisherIds.join(','),
    developerIds.join(','));
  }
  render() {
    const { classes, publishers, developers } = this.props;
    return (<Grid container className={classes.meta}>
      <Grid item md={6}>
        <Grid container alignItems={'center'}>
          <GridText heading={'Publisher'} />
          <CompanyChip names={publishers} />
        </Grid>
      </Grid>
      <Grid item md={6}>
        <Grid container alignItems={'center'}>
          <GridText heading={'Developer'} />
          <CompanyChip names={developers} />
        </Grid>
      </Grid>
    </Grid>);
  }
}
DevPublGrid.propTypes = {
  classes: PropTypes.shape().isRequired,
  publishers: PropTypes.arrayOf(PropTypes.shape()),
  developers: PropTypes.arrayOf(PropTypes.shape()),
  publisherIds: PropTypes.arrayOf(PropTypes.number),
  developerIds: PropTypes.arrayOf(PropTypes.number),
  getDeveloperAndPublisherDetails: PropTypes.func.isRequired,
};
DevPublGrid.defaultProps = {
  publishers: [],
  developers: [],
  publisherIds: null,
  developerIds: null,
};
const stylesHOC = withStyles(styles);
const mapDispatchToProps = dispatch => ({
  getDeveloperAndPublisherDetails:
    (developerIds, publisherIds) => dispatch(getCompanyById(developerIds, publisherIds)),
});
const mapStateToProps = ({ enums: { publishers, developers } }) => ({
  publishers,
  developers,
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
export default compose(connectHOC, stylesHOC)(DevPublGrid);
