"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _PDFPages = _interopRequireDefault(require("./PDFPages"));

var _PDFToolbox = _interopRequireDefault(require("./PDFToolbox"));

var _PDFThumbBar = _interopRequireDefault(require("./PDFThumbBar"));

var _PDFSearchBar = _interopRequireDefault(require("./PDFSearchBar"));

var _PDFProgressBar = _interopRequireDefault(require("./PDFProgressBar"));

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ZOOM_STEP = 0.2;

var PdfViewer = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(PdfViewer, _PureComponent);

  function PdfViewer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      pdf: null,
      scale: 1.2,
      progress: 0,
      currentPage: 1,
      showSearchBar: false,
      showThumbSidebar: _this.props.showThumbnailSidebar
    });

    _defineProperty(_assertThisInitialized(_this), "setCurrentPage", function (currentPage) {
      if (currentPage !== _this.state.currentPage) {
        _this.setState({
          currentPage: currentPage
        });

        var onChangePage = _this.props.onChangePage;
        onChangePage && onChangePage(currentPage);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setPdf", function (pdf) {
      _this.setState({
        pdf: pdf
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setPdfViewer", function (pdfViewer) {
      _this.setState({
        pdfViewer: pdfViewer
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setFindController", function (findController) {
      _this._pdfFindController = findController;
    });

    _defineProperty(_assertThisInitialized(_this), "onZoomIn", function () {
      _this.setState({
        scale: _this.state.scale + ZOOM_STEP
      });

      var onZoomIn = _this.props.onZoomIn;
      onZoomIn && onZoomIn();
    });

    _defineProperty(_assertThisInitialized(_this), "onZoomOut", function () {
      _this.setState({
        scale: _this.state.scale - ZOOM_STEP
      });

      var onZoomOut = _this.props.onZoomOut;
      onZoomOut && onZoomOut();
    });

    _defineProperty(_assertThisInitialized(_this), "updateProgressBar", function (progress) {
      _this.setState({
        progress: progress
      });

      var onProgress = _this.props.onProgress;
      onProgress && onProgress();
    });

    _defineProperty(_assertThisInitialized(_this), "onChangePage", function (e) {
      var newPageNum = Number(e.target.value);

      _this.scrollTo(newPageNum);
    });

    _defineProperty(_assertThisInitialized(_this), "scrollTo", function (page) {
      _this.setCurrentPage(page);

      _this.goToPage(page);
    });

    _defineProperty(_assertThisInitialized(_this), "goToPage", function (pageNumber) {
      var pdfViewer = _this.state.pdfViewer;
      pdfViewer.currentPageNumber = pageNumber;
    });

    _defineProperty(_assertThisInitialized(_this), "toggleThumbnail", function () {
      _this.setState({
        showThumbSidebar: !_this.state.showThumbSidebar
      });

      var onToggleThumbnail = _this.props.onToggleThumbnail;
      onToggleThumbnail && onToggleThumbnail(!_this.state.showThumbSidebar);
    });

    _defineProperty(_assertThisInitialized(_this), "showSearchBar", function () {
      _this.setState({
        showSearchBar: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideSearchBar", function () {
      _this.setState({
        showSearchBar: false
      });
    });

    return _this;
  }

  var _proto = PdfViewer.prototype;

  _proto.render = function render() {
    var _this$state = this.state,
        pdf = _this$state.pdf,
        progress = _this$state.progress,
        scale = _this$state.scale,
        currentPage = _this$state.currentPage,
        showSearchBar = _this$state.showSearchBar,
        showThumbSidebar = _this$state.showThumbSidebar;
    var _this$props = this.props,
        url = _this$props.url,
        showProgressBar = _this$props.showProgressBar,
        showToolbox = _this$props.showToolbox;
    return /*#__PURE__*/_react["default"].createElement("div", {
      id: "viewer-container"
    }, showProgressBar && /*#__PURE__*/_react["default"].createElement(_PDFProgressBar["default"], {
      progress: progress
    }), /*#__PURE__*/_react["default"].createElement("div", {
      id: "viewer"
    }, showSearchBar && /*#__PURE__*/_react["default"].createElement(_PDFSearchBar["default"], {
      pdfFindController: this._pdfFindController,
      hideSearchBar: this.hideSearchBar
    }), /*#__PURE__*/_react["default"].createElement(_PDFThumbBar["default"], {
      pdf: pdf,
      currentPage: currentPage,
      setCurrentPage: this.scrollTo,
      showThumbSidebar: showThumbSidebar
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "pdfViewer " + (!showThumbSidebar ? 'full' : '')
    }, showToolbox && /*#__PURE__*/_react["default"].createElement(_PDFToolbox["default"], {
      pdf: pdf,
      currentPage: currentPage,
      setCurrentPage: this.setCurrentPage,
      goToPage: this.goToPage,
      showThumbSidebar: showThumbSidebar,
      toggleThumbnail: this.toggleThumbnail,
      onZoomIn: this.onZoomIn,
      onZoomOut: this.onZoomOut,
      showSearchBar: this.showSearchBar,
      onChangePage: this.onChangePage
    }), /*#__PURE__*/_react["default"].createElement("div", {
      id: "pdf-pages"
    }, url && /*#__PURE__*/_react["default"].createElement(_PDFPages["default"], {
      url: url,
      scale: scale,
      setPdf: this.setPdf,
      setPdfViewer: this.setPdfViewer,
      setFindController: this.setFindController,
      setCurrentPage: this.setCurrentPage,
      updateProgressBar: this.updateProgressBar
    })))));
  };

  return PdfViewer;
}(_react.PureComponent);

var _default = PdfViewer;
exports["default"] = _default;
module.exports = exports.default;