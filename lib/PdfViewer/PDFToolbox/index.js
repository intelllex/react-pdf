"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _assets = require("../../assets");

require("./index.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Toolbox = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Toolbox, _Component);

  function Toolbox() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "currentPage", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      pageInputFocus: false
    });

    _defineProperty(_assertThisInitialized(_this), "onFocusPageInput", function () {
      _this.currentPage.current.select();

      _this.setState({
        pageInputFocus: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlurPageInput", function () {
      _this.setState({
        pageInputFocus: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pageUp", function () {
      var _this$props = _this.props,
          currentPage = _this$props.currentPage,
          setCurrentPage = _this$props.setCurrentPage,
          goToPage = _this$props.goToPage;

      if (currentPage !== 1) {
        var newPage = Number(currentPage) - 1;
        setCurrentPage(newPage);
        goToPage(newPage);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "pageDown", function () {
      var _this$props2 = _this.props,
          currentPage = _this$props2.currentPage,
          setCurrentPage = _this$props2.setCurrentPage,
          goToPage = _this$props2.goToPage,
          pdf = _this$props2.pdf;

      if (currentPage !== pdf.numPages) {
        var newPage = Number(currentPage) + 1;
        setCurrentPage(newPage);
        goToPage(newPage);
      }
    });

    return _this;
  }

  var _proto = Toolbox.prototype;

  _proto.render = function render() {
    var pageInputFocus = this.state.pageInputFocus;
    var _this$props3 = this.props,
        toggleThumbnail = _this$props3.toggleThumbnail,
        currentPage = _this$props3.currentPage,
        onZoomIn = _this$props3.onZoomIn,
        onZoomOut = _this$props3.onZoomOut,
        showSearchBar = _this$props3.showSearchBar,
        onChangePage = _this$props3.onChangePage;
    var numPages = this.props.pdf ? this.props.pdf.numPages : '-';
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "toolbox-container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "toolbox-wrapper"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "toolbox"
    }, /*#__PURE__*/_react["default"].createElement(_assets.Thumbnail, {
      id: "thumbnail-icon",
      onClick: toggleThumbnail
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "page-navigation"
    }, /*#__PURE__*/_react["default"].createElement(_assets.PageUp, {
      id: "page-up",
      onClick: this.pageUp,
      className: "page-up " + (currentPage === 1 ? 'disabled' : '')
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: "pageNumber " + (pageInputFocus ? 'input-focused' : ''),
      onFocus: this.onFocusPageInput,
      onClick: this.onFocusPageInput
    }, /*#__PURE__*/_react["default"].createElement("input", {
      ref: this.currentPage,
      type: "number",
      value: currentPage,
      min: 1,
      max: numPages,
      onChange: onChangePage,
      onBlur: this.onBlurPageInput
    }), /*#__PURE__*/_react["default"].createElement("span", null, "/ ", numPages)), /*#__PURE__*/_react["default"].createElement(_assets.PageDown, {
      id: "page-down",
      onClick: this.pageDown,
      className: "page-down " + (currentPage === numPages ? 'disabled' : '')
    })), /*#__PURE__*/_react["default"].createElement(_assets.ZoomIn, {
      id: "zoom-in",
      onClick: onZoomIn
    }), /*#__PURE__*/_react["default"].createElement(_assets.ZoomOut, {
      id: "zoom-out",
      onClick: onZoomOut
    }), /*#__PURE__*/_react["default"].createElement(_assets.SearchIcon, {
      id: "search-icon",
      onClick: showSearchBar
    }))));
  };

  return Toolbox;
}(_react.Component);

var _default = Toolbox;
exports["default"] = _default;
module.exports = exports.default;