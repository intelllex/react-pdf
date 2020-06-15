import React from 'react';
import { shallow } from 'enzyme';
import Thumbnail from '../Thumbnail';

describe('Thumbnail component', () => {
  const THUMBNAIL_SRC = 'https://img.src';
  const setCurrentPage = jest.fn();
  const props = {
    data: {
      thummbailSrc: THUMBNAIL_SRC,
      pageNum: 1,
    },
    currentPage: 2,
    setCurrentPage,
  };
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Thumbnail {...props} />);
  });

  it('should render Thumbnail correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should setCurrentPage when clicking on Thumbnail', () => {
    wrapper.find('img').simulate('click');
    expect(setCurrentPage).toHaveBeenCalled();
  });
});
