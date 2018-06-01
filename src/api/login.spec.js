// The assertion for a promise must be returned.
import {apiPostLogin} from './__mocks__/login';

it('works with promises', () => {
    expect.assertions(1);
    return apiPostLogin({id: 1, password: 'test'}).then(data => expect(data.token).toEqual('token'));
});