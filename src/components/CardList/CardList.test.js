import React from 'react';
import CardList from './CardList';
import { shallow } from 'enzyme';

it('hello', () => {
    const mockRobots = [{id: 1, name: 'John doe', email: 'Johndoe@gmail.com'}]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
})