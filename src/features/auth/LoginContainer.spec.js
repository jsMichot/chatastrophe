import React from 'react';
import {create} from 'react-test-renderer';
import {LoginContainer} from './LoginContainer';

describe('LoginContainer', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = create(<LoginContainer />);
    instance = component.toTree().instance;
  });

  it('_handleInputChange: should call setState with given name and value', () => {
    const data = {name: 'email', value: 'testing123@test.net'};
    const expectation = {[data.name]: data.value};
    const spy = jest.spyOn(instance, 'setState');

    instance._handleInputChange(null, data);

    expect(spy).toHaveBeenCalledWith(expectation);
  });
});
