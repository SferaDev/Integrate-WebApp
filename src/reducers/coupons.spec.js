import reducer, * as coupons from './coupons'

describe('reducers', () => {
    describe('coupons', () => {
        let state

        describe('when products are received', () => {

            beforeEach(() => {
                state = reducer({}, {
                    type: 'RECEIVE_COUPONS',
                    coupons: [
                        {
                            id: 1,
                            url: 'Url 1',
                            name: 'Name 2',
                            originalPrice: '0.60',
                            appliedDiscount: '20',
                            currentPrice: '0.45',
                            numberOfSolds: '40',
                            numberOfFreeUnits: '60'
                        },
                        {
                            id: 2,
                            url: 'Url 2',
                            name: 'Name 2',
                            originalPrice: '0.00',
                            appliedDiscount: '0',
                            currentPrice: '0.00',
                            numberOfSolds: '0',
                            numberOfFreeUnits: '0'
                        }
                    ]
                })
            })

            it('contains the products from the action', () => {
                expect(coupons.getCoupon(state, 1)).toEqual({
                    id: 1,
                    url: 'Url 1',
                    name: 'Name 2',
                    originalPrice: '0.60',
                    appliedDiscount: '20',
                    currentPrice: '0.45',
                    numberOfSolds: '40',
                    numberOfFreeUnits: '60'
                })
                expect(coupons.getCoupon(state, 2)).toEqual({
                    id: 2,
                    url: 'Url 2',
                    name: 'Name 2',
                    originalPrice: '0.00',
                    appliedDiscount: '0',
                    currentPrice: '0.00',
                    numberOfSolds: '0',
                    numberOfFreeUnits: '0'
                })
            })

            it('contains no other products', () => {
                expect(coupons.getCoupon(state, 3)).toEqual(undefined)
            })

            it('lists all of the products as visible', () => {
                expect(coupons.getActiveCoupons(state)).toEqual([
                    {
                        id: 1,
                        url: 'Url 1',
                        name: 'Name 2',
                        originalPrice: '0.60',
                        appliedDiscount: '20',
                        currentPrice: '0.45',
                        numberOfSolds: '40',
                        numberOfFreeUnits: '60'
                    },
                    {
                        id: 2,
                        url: 'Url 2',
                        name: 'Name 2',
                        originalPrice: '0.00',
                        appliedDiscount: '0',
                        currentPrice: '0.00',
                        numberOfSolds: '0',
                        numberOfFreeUnits: '0'
                    }
                ])
            })
        })
    })
})