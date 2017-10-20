import * as actions from '../index';
import * as types from '../types';

describe('actions', () => {
  it('should create an action to start login process', () => {
    const expectedAction = {
      type: types.LOGIN_STARTED,
    };
    expect(actions.startLogin()).toEqual(expectedAction);
  });
  it('should create an action to indicate successful login', () => {
    const testPayload = {
      data: [],
    }
    const expectedAction = {
      type: types.LOGIN_SUCCESS,
      payload: testPayload,
    };
    expect(actions.loginSucceeded(testPayload)).toEqual(expectedAction);
  });
});
