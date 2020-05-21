# react-fancy-pdf

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React Fancy PDF is a simple and fancy PDF Viewer based on pdf.js

- Thumnail sidebar
- Toolbox with useful feature likes zoom in, zoom out, page navigation, page up, pagedown
- Search within page

![image info](https://i.imgur.com/rqECUDN.png)

# How to install

```
npm install react-fancy-pdf
```

or

```
yarn add react-fancy-pdf
```

# How to use

```import React from 'react'
import ReactFancyPDF from 'react-fancy-pdf';
 
const ExampleFancyPDFViewer = () => {
    return (
        <PDFViewer
            url="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
            showProgressBar
            showToolbox
        />
    )
}
 
export default ExamplePDFViewer;
```

# Documentation
React component prop. types:

-   `url`:

    -   Type: _String_
    -   Required: **true**
    -   Description: The URL of PDF Document you want to display.

-   `showProgressBar`:

    -   Type: _Boolean_
    -   Required: **false**
    -   Description: Show progress bar on top when loading PDF Document

-   `showToolbox`:

    -   Type: _Boolean_
    -   Required: **false**
    -   Description: Show the useful toolbox on PDF Pages



[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo


