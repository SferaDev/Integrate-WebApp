// The assertion for a promise must be returned.
import {apiPostLogin} from '../../__mocks__/login';

it('works with promises', () => {
    expect.assertions(1);
    return apiPostLogin(1, 'test').then(data => expect(data).toEqual('token'));
});