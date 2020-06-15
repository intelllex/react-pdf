function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

var ZoomIn = function ZoomIn(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M2 10a8 8 0 0012.906 6.32l5.387 5.387 1.414-1.414-5.387-5.387A8 8 0 102 10zm8 6a6 6 0 100-12 6 6 0 000 12zM9 6v3H6v2h3v3h2v-3h3V9h-3V6H9z",
    clipRule: "evenodd"
  }));
};

export default ZoomIn;