import React from 'react';

const ZoomOut = props => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M2 10a8 8 0 0012.906 6.32l5.387 5.387 1.414-1.414-5.387-5.387A8 8 0 102 10zm8 6a6 6 0 100-12 6 6 0 000 12zM6 9v2h8V9H6z"
      clipRule="evenodd"
    />
  </svg>
);

export default ZoomOut;
