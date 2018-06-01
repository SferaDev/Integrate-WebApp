export const apiSetLanguage = (lang) => new Promise((resolve, reject) => {
    const user = {
        interfaceLanguage: 'ca',
    }
    localStorage.setItem('user', JSON.stringify(user))

    process.nextTick(
        () =>
            user.interfaceLanguage
                ? resolve(user)
                : reject({
                    error: 'Language not identified',
                }),
    );
});