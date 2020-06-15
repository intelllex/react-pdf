function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PDFViewer from './PdfViewer';
var PDF_DEMO_LINK = "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";

var _default = /*#__PURE__*/function (_Component) {
  _inheritsLoose(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PDFViewer, {
      url: PDF_DEMO_LINK,
      showProgressBar: true,
      showToolbox: true
    }));
  };

  return _default;
}(Component);

export { _default as default };