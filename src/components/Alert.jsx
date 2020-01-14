import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
  const { success, message } = props;
  return <div className={`Alert${success ? ' success' : ' Error'}`}>{message}</div>;
};

export default Alert;

Alert.propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool,
};
