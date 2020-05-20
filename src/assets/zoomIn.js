import React from 'react';

const ZoomIn = props => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M2 10a8 8 0 0012.906 6.32l5.387 5.387 1.414-1.414-5.387-5.387A8 8 0 102 10zm8 6a6 6 0 100-12 6 6 0 000 12zM9 6v3H6v2h3v3h2v-3h3V9h-3V6H9z"
      clipRule="evenodd"
    />
  </svg>
);

export default ZoomIn;
