import {cloudinaryUploadImg} from './cloudinary';

jest.mock('./index')

describe('Upload image to Cloudinary API functions', () => {
    function FormDataMock() {
        this.append = jest.fn();
        this.getObjectName = () => {return 'FormDataMock'}
    }
    global.FormData = FormDataMock

    it('cloudinaryUploadImg should resolve data correctly', () => {
        const mockFile = {img: 'img'}
        cloudinaryUploadImg(mockFile).then( (result) => {
            expect(result).toEqual('http://mockedSecureUrl.com/secure.jpg')
        })
    })

    it('cloudinaryUploadImg should catch an error when data is incorrect', () => {
        function NullFormDataMock() {
            this.append = jest.fn();
            this.getObjectName = () => {return 'NullFormDataMock'}
        }
        global.FormData = NullFormDataMock

        const mockFile = {img: 'incorrectImg'}
        cloudinaryUploadImg(mockFile).catch(e =>
            expect(e).toEqual({
                errorUploadCloudinary: 'Image could not be uploaded'
            })
        )
    })
})