import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, success }) => (
  <div className={`Alert${success ? ' success' : ' Error'}`}>{message}</div>
);
Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.string.isRequired,
};
export default Alert;
