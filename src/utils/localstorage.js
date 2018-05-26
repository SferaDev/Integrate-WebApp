let localStorage = window && window.localStorage ? window.localStorage : null;

if (typeof localStorage === 'undefined' || localStorage === null) {
    localStorage = {
        getItem: () => 'fake localStorage',
        setItem: (key, value) => {
        },
        clear: () => {
        }
    }
}

export {
    localStorage
}