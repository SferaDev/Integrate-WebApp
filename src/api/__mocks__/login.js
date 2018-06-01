const token = 'token'

const user = {
    id: 1,
    password: 'test',
    interfaceLanguage: 'en',
}

const auth = {
    user: user,
    token: token,
}

export const apiPostLogin = ({id, password}) => new Promise((resolve, reject) => {
    process.nextTick(
        () =>
            id === 1 && password === 'test'
                ? resolve(auth)
                : reject({
                    error: 'User with id ' + id + ' not found.',
                }),
    );
});