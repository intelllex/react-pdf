"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Thumbnail = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(Thumbnail, _PureComponent);

  function Thumbnail() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "onClickThumbnail", function () {
      var _this$props = _this.props,
          setCurrentPage = _this$props.setCurrentPage,
          pageNum = _this$props.data.pageNum;
      setCurrentPage(pageNum);
    });

    return _this;
  }

  var _proto = Thumbnail.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$data = _this$props2.data,
        thumbnailSrc = _this$props2$data.thumbnailSrc,
        pageNum = _this$props2$data.pageNum,
        currentPage = _this$props2.currentPage;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "thumbnail"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      alt: pageNum,
      src: thumbnailSrc,
      className: "" + (currentPage === pageNum ? 'focused' : ''),
      onClick: this.onClickThumbnail
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "page-number"
    }, pageNum));
  };

  return Thumbnail;
}(_react.PureComponent);

var _default = Thumbnail;
exports["default"] = _default;
module.exports = exports.default;