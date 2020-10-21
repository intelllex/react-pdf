import React, {Component} from 'react';
import {render} from 'react-dom';
import PDFViewer from '../../src';
import './index.scss';

export default class Demo extends Component {
  render() {
    return <div>
      <PDFViewer
        url="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
        showProgressBar
        showToolbox
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
