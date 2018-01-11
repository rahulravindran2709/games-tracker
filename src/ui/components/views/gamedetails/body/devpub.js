import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { getPublishersById, getDevelopersById } from 'actions/enums';
import CompanyChip from './companychip';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  meta: {
    height: '100px',
  },
});

class DevPublGrid extends React.Component {
  componentDidMount() {
    const { publisherIds, developerIds } = this.props;
    this.props.getPublisherDetails(publisherIds);
    this.props.getDeveloperDetails(developerIds);
  }
  render() {
    const { classes, publishers, developers } = this.props;
    return (<Grid container className={classes.meta}>
      <Grid item md={6}>
        <Grid container alignItems={'center'}>
          <Grid item md={3}>
            <Typography type="button">Publisher</Typography>
          </Grid>
          <CompanyChip names={publishers} />
        </Grid>
      </Grid>
      <Grid item md={6}>
        <Grid container alignItems={'center'}>
          <Grid item md={3}>
            <Typography type="button">Developer</Typography>
          </Grid>
          <CompanyChip names={developers} />
        </Grid>
      </Grid>
    </Grid>);
  }
}
DevPublGrid.propTypes = {
  classes: PropTypes.shape().isRequired,
  publisherIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  developerIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  getPublisherDetails: PropTypes.func.isRequired,
  getDeveloperDetails: PropTypes.func.isRequired,
};
const stylesHOC = withStyles(styles);
const mapDispatchToProps = dispatch => ({
  getPublisherDetails: publisherIds => dispatch(getPublishersById(publisherIds)),
  getDeveloperDetails: developerIds => dispatch(getDevelopersById(developerIds)),
});
const mapStateToProps = ({ enums: { publishers, developers } }) => ({
  publishers,
  developers,
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
export default compose(connectHOC, stylesHOC)(DevPublGrid);
