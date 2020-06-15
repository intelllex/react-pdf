/* eslint-disable */
import React, { PureComponent } from 'react';
import Thumbnail from './Thumbnail';

import './index.scss';

class PDFThumbbar extends PureComponent {
  state = {
    thumbnails: [],
  }

  componentDidMount() {
    if (this.props.pdf) {
      this.loadThumbnailsData(this.props.pdf);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pdf && !this.state.thumbnails.length) {
      this.loadThumbnailsData(nextProps.pdf);
    }
  }

  loadThumbnailsData = async (pdf) => {
    const pages = [];
    while (pages.length < pdf.numPages) {
      pages.push(pages.length + 1);
    }

    const thumbnails = await Promise.all(
      pages.map((num) => {
        return pdf.getPage(num)
          .then(this.makeThumb)
          .then(url => {
            return {
              thumbnailSrc: url,
              pageNum: num,
            };
          });
      }
      )
    );

    this.setState({ thumbnails });
  }

  makeThumb = (page) => {
    const viewport = page.getViewport(1.0);
    const canvas = document.createElement('canvas');

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    return page.render({
      canvasContext: canvas.getContext('2d'),
      viewport,
    }).promise.then(() => {
      const src = canvas.toDataURL();
      canvas.width = 0;
      canvas.height = 0;
      return src;
    });
  }

  render() {
    const {
      thumbnails
    } = this.state;

    const {
      currentPage,
      setCurrentPage,
      showThumbSidebar
    } = this.props;
    
    if (!thumbnails.length) {
      return null;
    }

    return (
      <div className={`pdf-thumbnail-bar ${!showThumbSidebar ? 'hide' : ''}`}>
        {thumbnails.map(thumbnail => {
            return (<Thumbnail
              key={thumbnail.pageNum}
              data={thumbnail}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />);
          })
        }
      </div>
    );
  }
}

export default PDFThumbbar;
