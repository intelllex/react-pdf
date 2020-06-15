"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var nextIcon = function nextIcon(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    width: 18,
    height: 18,
    fill: "none",
    viewBox: "0 0 18 18"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#E3E8EF",
    fillRule: "evenodd",
    d: "M10.94 9L5.47 3.53l1.06-1.06L13.06 9l-6.53 6.53-1.06-1.06L10.94 9z",
    clipRule: "evenodd"
  }));
};

var _default = nextIcon;
exports["default"] = _default;
module.exports = exports.default;