function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

var PrevIcon = function PrevIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 18,
    height: 18,
    fill: "none",
    viewBox: "0 0 18 18"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#E3E8EF",
    fillRule: "evenodd",
    d: "M7.06 9l5.47 5.47-1.06 1.06L4.94 9l6.53-6.53 1.06 1.06L7.06 9z",
    clipRule: "evenodd"
  }));
};

export default PrevIcon;