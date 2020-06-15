function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PDFPages from './PDFPages';
import PDFToolbox from './PDFToolbox';
import PDFThumbBar from './PDFThumbBar';
import PDFSearchBar from './PDFSearchBar';
import PDFProgressBar from './PDFProgressBar';
import './index.scss';
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
    return /*#__PURE__*/React.createElement("div", {
      id: "viewer-container"
    }, showProgressBar && /*#__PURE__*/React.createElement(PDFProgressBar, {
      progress: progress
    }), /*#__PURE__*/React.createElement("div", {
      id: "viewer"
    }, showSearchBar && /*#__PURE__*/React.createElement(PDFSearchBar, {
      pdfFindController: this._pdfFindController,
      hideSearchBar: this.hideSearchBar
    }), /*#__PURE__*/React.createElement(PDFThumbBar, {
      pdf: pdf,
      currentPage: currentPage,
      setCurrentPage: this.scrollTo,
      showThumbSidebar: showThumbSidebar
    }), /*#__PURE__*/React.createElement("div", {
      className: "pdfViewer " + (!showThumbSidebar ? 'full' : '')
    }, showToolbox && /*#__PURE__*/React.createElement(PDFToolbox, {
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
    }), /*#__PURE__*/React.createElement("div", {
      id: "pdf-pages"
    }, url && /*#__PURE__*/React.createElement(PDFPages, {
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
}(PureComponent);

export default PdfViewer;