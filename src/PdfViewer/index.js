import React, { PureComponent } from 'react';

import PDFPages from './PDFPages';
import PDFToolbox from './PDFToolbox';
import PDFThumbBar from './PDFThumbBar';
import PDFSearchBar from './PDFSearchBar';
import PDFProgressBar from './PDFProgressBar';

import './index.scss';

const ZOOM_STEP = 0.2;
class PdfViewer extends PureComponent {
  state = {
    pdf: null,
    scale: 1.2,
    progress: 0,
    currentPage: 1,
    showSearchBar: false,
    showThumbSidebar: this.props.showThumbnailSidebar,
  };

  setCurrentPage = (currentPage) => {
    if (currentPage !== this.state.currentPage) {
      this.setState({ currentPage });
      const { onChangePage } = this.props;
      onChangePage && onChangePage(currentPage);
    }
  }

  setPdf = (pdf) => {
    this.setState({ pdf });
  }

  setPdfViewer = (pdfViewer) => {
    this.setState({ pdfViewer });
  }

  setFindController = (findController) => {
    this._pdfFindController = findController;
  }

  onZoomIn = () => {
    this.setState({
      scale: this.state.scale + ZOOM_STEP
    });
    const { onZoomIn } = this.props;
    onZoomIn && onZoomIn();
  }

  onZoomOut = () => {
    this.setState({
      scale: this.state.scale - ZOOM_STEP
    });
    const { onZoomOut } = this.props;
    onZoomOut && onZoomOut();
  }

  updateProgressBar = progress => {
    this.setState({ progress });
    const { onProgress } = this.props;
    onProgress && onProgress();
  } 

  onChangePage = (e) => {
    const newPageNum = Number(e.target.value);
    this.scrollTo(newPageNum);
  }

  scrollTo = (page) => {
    this.setCurrentPage(page);
    this.goToPage(page);
  }

  goToPage = (pageNumber) => {
    const { pdfViewer } = this.state;
    pdfViewer.currentPageNumber = pageNumber;
  }

  toggleThumbnail = () => {
    this.setState({
      showThumbSidebar: !this.state.showThumbSidebar
    });
    const { onToggleThumbnail } = this.props;
    onToggleThumbnail && onToggleThumbnail(!this.state.showThumbSidebar);
  }

  showSearchBar = () => {
    this.setState({
      showSearchBar: true,
    });
  }

  hideSearchBar = () => {
    this.setState({
      showSearchBar: false,
    });
  }

  render() {
    const {
      pdf,
      progress,
      scale,
      currentPage,
      showSearchBar,
      showThumbSidebar
    } = this.state;

    const {
      url,
      showProgressBar,
      showToolbox
    } = this.props;
    
    return (
      <div id="viewer-container">
        {showProgressBar && <PDFProgressBar progress={progress} />}
        <div id="viewer">

          {/* PDF SearchBar */}
          {showSearchBar &&
            <PDFSearchBar
              pdfFindController={this._pdfFindController}
              hideSearchBar={this.hideSearchBar}
            />
          }

          {/* PDFThumbBar */}
          <PDFThumbBar
            pdf={pdf}
            currentPage={currentPage}
            setCurrentPage={this.scrollTo}
            showThumbSidebar={showThumbSidebar}
          />

          {/* PDF Content */}
          <div className={`pdfViewer ${!showThumbSidebar ? 'full' : ''}`}>
            {/* PDF Toolbox */}
            {showToolbox &&
              <PDFToolbox
                pdf={pdf}
                currentPage={currentPage}
                setCurrentPage={this.setCurrentPage}
                goToPage={this.goToPage}
                showThumbSidebar={showThumbSidebar}
                toggleThumbnail={this.toggleThumbnail}
                onZoomIn={this.onZoomIn}
                onZoomOut={this.onZoomOut}
                showSearchBar={this.showSearchBar}
                onChangePage={this.onChangePage}
              />
            }

            {/* PDF Pages */}
            <div id="pdf-pages">
              {url &&
                <PDFPages
                  url={url}
                  scale={scale}
                  setPdf={this.setPdf}
                  setPdfViewer={this.setPdfViewer}
                  setFindController={this.setFindController}
                  setCurrentPage={this.setCurrentPage}
                  updateProgressBar={this.updateProgressBar}
                />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PdfViewer;
