import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

test('should render Test title', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('h1').text()).toBe('Test');
});
