import React from 'react';

const Alert = ({ message, success }) => (
  <div className={`Alert${success ? ' success' : ' Error'}`}>{message}</div>
);
export default Alert;
