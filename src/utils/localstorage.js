let localStorage = window && window.localStorage ? window.localStorage : null;

if (typeof localStorage === 'undefined' || localStorage === null) {
    let fakeLocalStorage = {};
    localStorage = {
        getItem: (key) => fakeLocalStorage[key] || null,
        setItem: (key, value) => fakeLocalStorage[key] = value,
        clear: () => {
            fakeLocalStorage = {}
        }
    }
}

export {
    localStorage
}