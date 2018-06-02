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

export const postCloudinary = (formData) => new Promise((resolve, reject) => {
    console.log(formData.getObjectName())
    const mockResponse =
    formData.getObjectName() === 'FormDataMock' ?
    {
        data: {
            secure_url: 'http://mockedSecureUrl.com/secure.jpg'
        }
    } : {
        data: {
            secure_url: null
        }
    }

    process.nextTick(
        () =>
            mockResponse.data.secure_url
                ? resolve(mockResponse)
                : reject({
                errorUploadCloudinary: 'Image could not be uploaded'
                })
    )
})