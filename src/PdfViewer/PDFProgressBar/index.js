import React from 'react';
import './index.scss';

const PDFProgressBar = ({ progress }) => {
  if (progress === 0 || progress === 100) return null;

  return (
    <div className="progress-bar">
      <div className="progress">
        <div
          className="progress-percent"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default PDFProgressBar;
