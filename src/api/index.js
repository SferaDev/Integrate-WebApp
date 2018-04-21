import _goods from './mock/goods.json'

const TIMEOUT = 100

export default {
    getGoods: (cb) => setTimeout(() => cb(_goods), TIMEOUT),
    createGood: (_goods, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
}