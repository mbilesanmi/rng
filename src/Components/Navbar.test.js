import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Navbar from './Navbar.jsx';

it('Navbar exists', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('Navbar', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.find('nav').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should reload the home page when the Home button is clicked', () => {
    const wrapper = shallow(<Navbar />);
    wrapper.find('.navbar-brand').simulate('click');
  });
});
