import React, {Component} from 'react';
import {render} from 'react-dom';
import Example from '../../src';
import './index.scss';

export default class Demo extends Component {
  render() {
    return <div>
      <Example/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
