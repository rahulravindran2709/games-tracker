import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import style from './style.scss';

const styles = theme => ({

});
class ImageStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  handleMouseOver = () => {
    this.setState({
      isActive: true,
    });
  }
  handleMouseOut = () => {
    this.setState({
      isActive: false,
    });
  }
  render() {
    const { classes } = this.props;
    return (<div className={style.container}>
      <section>
        <figure onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver} className={classnames({ stack: true, 'stack-bouncygrid': true, active: this.state.isActive })}>
          <img src="http://via.placeholder.com/400x300" alt="img01" />
          <img src="http://via.placeholder.com/400x300" alt="img02" />
          <img src="http://via.placeholder.com/400x300" alt="img04" />
          <img src="http://via.placeholder.com/400x300" alt="img03" />
        </figure>
      </section>
    </div>);
  }
}

ImageStack.propTypes = {
  classes: PropTypes.shape().isRequired,
}
const withStylesHOC = withStyles(styles);
export default withStylesHOC(ImageStack);
