import React from 'react';
import './index.scss';

var PDFProgressBar = function PDFProgressBar(_ref) {
  var progress = _ref.progress;
  if (progress === 0 || progress === 100) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "progress-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-percent",
    style: {
      width: progress + "%"
    }
  })));
};

export default PDFProgressBar;