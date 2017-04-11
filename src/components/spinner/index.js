import React from 'react';
import PropTypes from 'prop-types';
import * as lib from './library';

class Spinner extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    opacity: PropTypes.number,
    background: PropTypes.string
  };

  static defaultProps = {
    type: 'circle',
    opacity: 0.03,
    background: '#000'
  };
  
  render() {
    return (<div className="spinner">
      <div
        className="cover"
        style={{
        opacity: this.props.opacity,
        background: this.props.background
      }} > </div>
      {lib[this.props.type]}
    </div>);
  }
}

export default Spinner;
