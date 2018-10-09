import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NumberList from './NumberList.jsx';

import { testNumbers } from '../helpers/dummyData.js';

describe('NumberList', () => {
  let props = {
    numbers: testNumbers,
    order: 'asc',
    pagination: {
      totalPages: 3,
    },
    handlePageClick:jest.fn(),
    handleSortClick:jest.fn()
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<NumberList {...props} />);
  });

  it('renders properly when props are supplied', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders properly when numbers is an empty Array', () => {
    props = {
      ...props,
      numbers: [],
    };
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders properly when the number of pages is 1', () => {
    props = {
      ...props,
      pagination: {
        totalPages: 0
      },
    };
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders properly when totalPages is greater than 0', () => {
    props = {
      ...props,
      totalPages: 11,
    };
    const wrapper = shallow(<NumberList {...props} />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when totalPages is less than 1', () => {
    props = {
      ...props,
      totalPages: 0,
    };
    const wrapper = shallow(<NumberList {...props} />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when totalPages is less than 10', () => {
    props = {
      ...props,
      totalPages: 4,
    };
    const wrapper = shallow(<NumberList {...props} />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when sort is ID', () => {
    props = {
      ...props,
      sort: 'id'
    };
    const wrapper = shallow(<NumberList {...props} />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('calls the handleSortClick method', () => {
    props = {
      ...props,
      sort: 'id'
    };
    const wrapper = mount(<NumberList {...props} />);
    const action = wrapper.find('#id').first().simulate('click');
    expect(action).toBeInstanceOf(Object);
  });

  it('renders properly when order is ASC', () => {
    props = {
      ...props,
      sort: 'id',
      order: 'asc'
    };
    const wrapper = shallow(<NumberList {...props} />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when order is DESC', () => {
    props = {
      ...props,
      sort: 'id',
      order: 'desc'
    };
    const wrapper = shallow(<NumberList {...props} />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when sort is phoneNo', () => {
    props = {
      ...props,
      sort: 'phoneNo'
    };
    const wrapper = shallow(<NumberList {...props} />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when order is ASC', () => {
    props = {
      ...props,
      sort: 'phoneNo',
      order: 'asc'
    };
    const wrapper = shallow(<NumberList {...props} />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when order is DESC', () => {
    props = {
      ...props,
      sort: 'phoneNo',
      order: 'desc'
    };
    const wrapper = shallow(<NumberList {...props} />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
