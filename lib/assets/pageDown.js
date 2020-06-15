"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var pageDown = function pageDown(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M19.293 7.293l1.414 1.414L12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293z",
    clipRule: "evenodd"
  }));
};

var _default = pageDown;
exports["default"] = _default;
module.exports = exports.default;