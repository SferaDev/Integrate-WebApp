export const cloudinaryUploadImg = ({file}) =>
    new Promise((resolve, reject) => {
        const mockedUrl = 'mockedUrl'
        process.nextTick(
            () =>
                mockedUrl ?
                    resolve(mockedUrl) : reject({error: 'Error'})
        );
    })