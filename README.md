# react-fancy-pdf

[![npm package][npm-badge]][npm]

**React Fancy PDF is a simple and fancy PDF Viewer based on pdf.js**

[React Fancy PDF Demo](https://intelllex.github.io/react-fancy-pdf/)

- Progress Bar when loading PDF
- Thumbnail sidebar
- Toolbox with useful features (zoom in, zoom out, page jump, page up, pagedown)
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

```js
import React from 'react';
import ReactFancyPDF from 'react-fancy-pdf';
 
const ExampleFancyPDFViewer = () => {
    return (
        <ReactFancyPDF
            url="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
            showProgressBar
            showToolbox
        />
    )
};
 
export default ExampleFancyPDFViewer;
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

-   `onChangePage`:
    -   Type: _Function_
    -   Required: **false**
    -   Description: Callback with `page` param when changing Page Number

-   `onZoomIn`:
    -   Type: _Function_
    -   Required: **false**
    -   Description: Callback when clicking on Zoom In button

-   `onZoomOut`:
    -   Type: _Function_
    -   Required: **false**
    -   Description: Callback when clicking on Zoom Out button

-   `onProgress`:
    -   Type: _Function_
    -   Required: **false**
    -   Description: Callback with `progress` param when loading PDF

-   `onToggleThumbnail`:
    -   Type: _Function_
    -   Required: **false**
    -   Description: Callback with `isShowThumbSidebar` param when toggling Thumbnail sidebar

# Contributors
- **React Fancy PDF** was designed by [Cellyn Tan](https://cellyntan.com), Digital Product Designer from [INTELLLEX](https://intelllex.com).

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo


