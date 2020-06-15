function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

var CloseIcon = function CloseIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#97A1B6",
    fillRule: "evenodd",
    d: "M8 9.414l-4.293 4.293-1.414-1.414L6.586 8 2.293 3.707l1.414-1.414L8 6.586l4.293-4.293 1.414 1.414L9.414 8l4.293 4.293-1.414 1.414L8 9.414z",
    clipRule: "evenodd"
  }));
};

export default CloseIcon;