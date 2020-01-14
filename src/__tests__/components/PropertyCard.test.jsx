import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../components/PropertyCard';

it('renders', () => {
  const props = {
    title: 'Big House',
    type: 'Detached',
    bathrooms: 3,
    bedrooms: 3,
    price: 300000,
    city: 'Manchester',
    email: 'hello@hotmail.com',
    userID: '12344567',
    saveProp: jest.fn(),
    id: '1234567',
  };
  const wrapper = shallow(<PropertyCard {...props} />);

  expect(wrapper.exists()).toBeTruthy();
});

xit('renders a property Card', () => {
  const wrapper = shallow(<PropertyCard />);
  const card = wrapper.find('.card');

  expect(card.exists()).toBeTruthy();
});
