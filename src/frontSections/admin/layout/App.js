import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';
import Scripts from './Scripts';

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    params: PropTypes.object,
    location: PropTypes.object,
    children: PropTypes.object
  };

  render() {
    return (
      <html>
        <Head title="Admin - GBS example project"/>
        <body className="pace-done">
        <div id="wrapper">
          <div id="page-wrapper" className="container">
            {this.props.children}
          </div>
        </div>
        <Scripts />
        </body>
      </html>
    );
  }
}

export default App;
