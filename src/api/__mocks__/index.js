export const putApi = (endpoint, data) => new Promise((resolve, reject) => {
    let mockResponse
    if (endpoint === `/me/password/` && (data.oldPassword === null || data.newPassword === null)) {
        mockResponse = {
            data: null
        }
    }
    else if (endpoint === `/me/language/interface` && data.interfaceLanguage === null) {
        mockResponse = {
            data: null
        }
    }
    else if (data.good && data.good === 'mockedIncorrectGood') {
        mockResponse = {
            data: null
        }
    }
    else if (data) {
        mockResponse = {
            data: 'mockedData'
        }
    }
    else {
        mockResponse = {
            data: null
        }
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

export const getApi = () => new Promise((resolve, reject) => {
    const mockResponse = {
        data: 'mockedData'
    }
    process.nextTick(
        () =>
            mockResponse.data
                ? resolve(mockResponse)
                : reject({
                    errorGetApi: 'Request could not be done',
                }),
    );
});

export const postApi = (endpoint, data) => new Promise((resolve, reject) => {
    const mockResponse =
        data ?
        {
        data: 'mockedData'
    } : {
        data: null
            }
    process.nextTick(
        () =>
            mockResponse.data
                ? resolve(mockResponse)
                : reject({
                    errorPostApi: 'Request could not be done',
                }),
    );
});

export const deleteApi = (endpoint, data) => new Promise((resolve, reject) => {
    let mockResponse
    if (data.good && data.good === 'mockedIncorrectGood') {
        mockResponse = {
            data: null
        }
    }
    else if (data) {
        mockResponse = {
            data: 'mockedData'
        }
    }
    else {
        mockResponse = {
            data: null
        }
    }

    process.nextTick(
        () =>
            mockResponse.data
                ? resolve(mockResponse)
                : reject({
                    errorDeleteApi: 'Request could not be done',
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