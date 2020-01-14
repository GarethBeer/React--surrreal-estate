import React from 'react';
import { shallow } from 'enzyme';
import AddProperty from '../../components/AddProperty';

test('that it renders a form', () => {
  const wrapper = shallow(<AddProperty />);
  const form = wrapper.find('form');

  expect(form.exists()).toBeTruthy();
});

test('that form has text area ', () => {
  const wrapper = shallow(<AddProperty />);
  const form = wrapper.find('.form');
  const textarea = form.find('.description');

  expect(textarea.exists()).toBeTruthy();
});

test('that form has a button ', () => {
  const wrapper = shallow(<AddProperty />);
  const form = wrapper.find('form');
  const button = form.find('button');

  expect(button.exists()).toBeTruthy();
});

test('that form has text area has on change prop ', () => {
  const wrapper = shallow(<AddProperty />);

  const textarea = wrapper.find('textarea');

  expect(textarea.props().value).toBe('');
});

test('the input field value is whatever it is written', () => {
  const wrapper = shallow(<AddProperty />);

  wrapper.find('textarea').simulate('change', {
    target: { name: 'title', value: 'hello' },
  });
  const input = wrapper.find('textarea');

  expect(input.props().value).toBe('hello');
});

test('when the button on the form is clicked a function is called', () => {
  const wrapper = shallow(<AddProperty />);
  const fakeEvent = { preventDefault: () => console.log('preventDefault') };
  const handleAddProperty = jest.fn();

  wrapper.find('textarea').simulate('change', {
    target: { name: 'title', value: 'hello' },
  });
  wrapper.find('form').simulate('submit', fakeEvent);

  expect(handleAddProperty).toHaveBeenCalled();
});
