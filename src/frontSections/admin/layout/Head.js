import React from 'react';
import PropTypes from 'prop-types';

class Head extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <head>
        <meta charSet="utf-8" />
        <title>{this.props.title}</title>
        <link href="/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/admin.css" rel="stylesheet" />
      </head>
    );
  }
}

export default Head;
