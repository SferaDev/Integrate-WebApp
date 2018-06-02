export const putApi = (endpoint, data) => new Promise((resolve, reject) => {
    const mockResponse = {
        data: data.newPassword
    }
    process.nextTick(
        () =>
            mockResponse.data
                ? resolve(mockResponse)
                : reject({
                errorPutApi: 'Request could not be done',
                }),
    );
});