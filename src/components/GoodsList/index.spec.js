import React from 'react'
import Good from '../Good';
import GoodsList from './index';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

const modalStub = {
    modal: {isOpen: false,}
}

const actionsStub = {
    goodsActions : {},
    modalActions: {},
}

const setup = (goods = []) => {
    const component = enzyme.shallow(
        <GoodsList goods={goods} modal={modalStub} actions={actionsStub}/>
    )

    return {
        component: component,
        goods: component.find(Good),
    }
}

describe('when given good', () => {
    const good = [
        {
            _id: '1',
            picture: 'http://www.fruteriasanpelayo.com/media/catalog/product/cache/1/image/680x560/75d5da3c2391ff3c948ada8220a45b7b/p/a/pan_barra_1.jpg',
            productName: 'Barra de pa',
            initialPrice: 0.80,
            discount: 20,
            discountType: '%',
            pendingUnits: 2,
            category: 1,
            reusePeriod: 1,
        }
    ]

    it('should render coupons', () => {
        const {goods} = setup(good)
        const props = {
            actions: {
                goodsActions: {},
                modalActions: {},
            },
            good: {
                _id: good[0]._id,
                picture: good[0].picture,
                productName: good[0].productName,
                initialPrice: good[0].initialPrice,
                discount: good[0].discount,
                discountType: good[0].discountType,
                pendingUnits: good[0].pendingUnits,
                category: good[0].category,
                reusePeriod: good[0].reusePeriod
            }
        }

        expect(goods.at(0).props()).toEqual(props)
    })
})
