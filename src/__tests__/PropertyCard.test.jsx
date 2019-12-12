import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../components/PropertyCard';

test('it renders a title property', () => {
  const wrapper = shallow(<PropertyCard title="Stunning apartment!" />);
  expect(wrapper.find('.title').text()).toBe('Stunning apartment!');
});
test('it renders a type property', () => {
  const wrapper = shallow(<PropertyCard type="flat" />);
  expect(wrapper.find('.type').text()).toBe('flat');
});
