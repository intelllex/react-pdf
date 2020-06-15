function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

var DownloadIcon = function DownloadIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#7C86A5",
    fillRule: "evenodd",
    d: "M10.862 6.195L8.666 8.39V1.333H7.333V8.39L5.138 6.195l-.943.943L8 10.943l3.804-3.805-.942-.943zm3.804 7.138v-2.666h-1.333v2.666H2.666v-2.666H1.333v2.666c0 .737.597 1.334 1.333 1.334h10.667c.736 0 1.333-.597 1.333-1.334z",
    clipRule: "evenodd"
  }));
};

export default DownloadIcon;