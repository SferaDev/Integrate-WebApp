const token = 'token'

const user = {
    1: {
        id: 1,
        password: 'test' }
}

export const apiPostLogin = (id, password) => new Promise((resolve, reject) => {
    process.nextTick(
        () =>
            user[id].password === password
                ? resolve(token)
                : reject({
                    error: 'User with ' + user.id + ' not found.',
                }),
    );
});