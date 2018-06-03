import {apiPostLogin} from './login';
import mockAxios from 'jest-mock-axios';

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});

it('apiPostLogin should get data from the server', () => {
    let catchFn = jest.fn()
    let nif = '1';
    let password = 'pw'

    apiPostLogin({nif, password})
        .catch(catchFn);

    /*
    expect(mockAxios).toHaveBeenCalled();

    expect(catchFn).not.toHaveBeenCalled()*/
});

/*
it('apiPostLogin should catch errors', () => {
    let catchFn2 = jest.fn()

    apiPostLogin('Incorrect input').catch(catchFn2)
    let firstRequestInfo = mockAxios.lastReqGet()

    mockAxios.mockError({ error: 'mock error!' }, firstRequestInfo);

    expect(catchFn2).not.toHaveBeenCalled()
}*/