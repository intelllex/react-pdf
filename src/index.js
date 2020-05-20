import React, {Component} from 'react';
import PDFViewer from './PdfViewer';

const PDF_DEMO_LINK = "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";
export default class extends Component {
  render() {
    return <div>
      <PDFViewer
        url={PDF_DEMO_LINK}
        showProgressBar
        showToolbox
      />
    </div>
  }
}
