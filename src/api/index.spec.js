// ./test/UppercaseProxy.spec.js
import mockAxios from 'jest-mock-axios';
import {deleteApi, getApi, postApi, postCloudinary, putApi} from './index';

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});

it('getApi should get data from the server', () => {
    let catchFn = jest.fn()
    let endpoint = '/mockedEndpoint';

    getApi(endpoint)
        .catch(catchFn);

    // since `get` method is a spy, we can check if the server request was correct
    // a) the correct method was used (get)
    // b) went to the correct web service URL ('/mockedEndpoint/')
    expect(mockAxios.get).toHaveBeenCalled();

    // catch should not have been called
    expect(catchFn).not.toHaveBeenCalled()
});

it('getApi should catch errors', () => {
    let catchFn2 = jest.fn()

    getApi('Incorrect input').catch(catchFn2)
    let firstRequestInfo = mockAxios.lastReqGet()

    mockAxios.mockError({ error: 'mock error!' }, firstRequestInfo);

    expect(catchFn2).not.toHaveBeenCalled()
});

it('postApi should get data from the server', () => {
    let catchFn = jest.fn()
    let endpoint = '/mockedEndpoint'
    let data = 'data'

    postApi(endpoint, data)
        .catch(catchFn);

    expect(mockAxios.post).toHaveBeenCalled();

    expect(catchFn).not.toHaveBeenCalled();
});

it('postApi should catch errors', () => {
    let catchFn2 = jest.fn()

    postApi('Incorrect input').catch(catchFn2)
    let firstRequestInfo = mockAxios.lastReqGet()

    mockAxios.mockError({ error: 'mock error!' }, firstRequestInfo);

    expect(catchFn2).not.toHaveBeenCalled()
});

it('putApi should get data from the server', () => {
    let catchFn = jest.fn()
    let endpoint = '/mockedEndpoint'
    let data = 'data'

    putApi(endpoint, data)
        .catch(catchFn);

    expect(mockAxios.put).toHaveBeenCalled();

    expect(catchFn).not.toHaveBeenCalled();
});

it('putApi should catch errors', () => {
    let catchFn2 = jest.fn()

    putApi('Incorrect input').catch(catchFn2)
    let firstRequestInfo = mockAxios.lastReqGet()

    mockAxios.mockError({ error: 'mock error!' }, firstRequestInfo);

    expect(catchFn2).not.toHaveBeenCalled()
});

it('deleteApi should get data from the server', () => {
    let catchFn = jest.fn()
    let endpoint = '/mockedEndpoint'

    deleteApi(endpoint)
        .catch(catchFn);

    expect(mockAxios.delete).toHaveBeenCalled();

    expect(catchFn).not.toHaveBeenCalled();
});

it('deleteApi should catch errors', () => {
    let catchFn2 = jest.fn()

    deleteApi('Incorrect input').catch(catchFn2)
    let firstRequestInfo = mockAxios.lastReqGet()

    mockAxios.mockError({ error: 'mock error!' }, firstRequestInfo);

    expect(catchFn2).not.toHaveBeenCalled()
});

it('postCloudinary should get data from the server', () => {
    let catchFn = jest.fn()
    let formData = 'mockFormData'

    postCloudinary(formData)
        .catch(catchFn);

    expect(mockAxios).toHaveBeenCalled()

    expect(catchFn).not.toHaveBeenCalled();
});

it('postCloudinary should catch errors', () => {
    let catchFn2 = jest.fn()

    postCloudinary('Incorrect input').catch(catchFn2)
    let firstRequestInfo = mockAxios.lastReqGet()

    mockAxios.mockError({ error: 'mock error!' }, firstRequestInfo);

    expect(catchFn2).not.toHaveBeenCalled()
});