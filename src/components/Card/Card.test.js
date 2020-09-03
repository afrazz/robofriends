import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

it('hello', () => {
    expect(shallow(<Card />)).toMatchSnapshot()
})