import React from 'react';

import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { spy } from 'sinon';

// components
import Numbers from './Numbers.jsx';

import { testNumbers } from '../helpers/dummyData.js';

let event = {
  target: {
    name: 'id',
    value: 4000
  },
  preventDefault: spy(),
};

describe('Numbers', () => {
  let state = {
    numberLength: 10,
    numbers: testNumbers,
    numbersToShow: [],
    page: 1,
    pagination: {},
    sort: null,
    order: null,
    quantity: 0
  }
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Numbers {...state} />);
  })

  afterAll(() => {
    wrapper.unmount();
  });

  it('renders without crashing', () => {
    const rendering = toJson(wrapper);
    expect(rendering).toMatchSnapshot();
  });

  // GENERATE NUMBERS FXN
  it('should call the generateNumbers method', () => {
    const generateNumbersSpy = spy(wrapper.instance(), 'generateNumbers');
    wrapper.state().quantity = 5000;
    wrapper.instance().generateNumbers(event);
    expect(generateNumbersSpy.called).toEqual(true);
  });
  
  // UPDATEFORMSTATE FXN
  it('should call the updateFormState method', () => {
    const updateFormStateSpy = spy(wrapper.instance(), 'updateFormState');
    wrapper.instance().updateFormState(event);
    expect(updateFormStateSpy.called).toEqual(true);
  });

  // GETPAGINATEDITEMS FXN
  it('should call the getPaginatedItems method', () => {
    const getPaginatedItemsSpy = spy(wrapper.instance(), 'getPaginatedItems');
    wrapper.instance().getPaginatedItems(state.numbers);
    expect(getPaginatedItemsSpy.called).toEqual(true);
  });

  // HANDLEPAGECLICK FXN
  it('should call the handlePageClick method', () => {
    event = {
      ...event,
      target: {
        name: 'id',
        getAttribute: spy()
      },
    };
    const handlePageClickSpy = spy(wrapper.instance(), 'handlePageClick');
    wrapper.instance().handlePageClick(event);
    expect(handlePageClickSpy.called).toEqual(true);
  });

  // SETSORTSTATE FXN
  it('should call the setSortState method', () => {
    const setSortStateSpy = spy(wrapper.instance(), 'setSortState');
    wrapper.instance().setSortState('id');
    expect(setSortStateSpy.called).toEqual(true);
    expect(wrapper.state().sort).toEqual('id');
    expect(wrapper.state().order).toEqual('asc');
  });

  // SETSORTSTATE FXN
  it('should call the ge method', () => {
    const setSortStateSpy = spy(wrapper.instance(), 'setSortState');
    wrapper.instance().setSortState('id');
    expect(setSortStateSpy.called).toEqual(true);
    expect(wrapper.state().sort).toEqual('id');
    expect(wrapper.state().order).toEqual('asc');
  });

  // HANDLESORTCLICK FXN
  it('should call the handleSortClick method', () => {
    event = {
      ...event,
      target: {
        name: 'id',
        getAttribute: jest.fn
      },
    };
    state = {
      ...state,
      order: 'asc'
    }
    const wrapper = mount(<Numbers {...state} />);
    const handleSortClickSpy = spy(wrapper.instance(), 'handleSortClick');
    wrapper.instance().handleSortClick(event);
    expect(handleSortClickSpy.called).toEqual(true);
  });
});
