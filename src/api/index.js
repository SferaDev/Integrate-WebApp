import _coupons from './mock/coupons.json'

const TIMEOUT = 100

export default {
    getCoupons: (cb) => setTimeout(() => cb(_coupons), TIMEOUT),
    createCoupon: (_coupons, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
}