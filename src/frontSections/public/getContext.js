import PropTypes from 'prop-types';

function getContext(props) {
  return {
    location: props.location
  }
}

getContext.childContextTypes = {
  location: PropTypes.object
};

export default getContext;
