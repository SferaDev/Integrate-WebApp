import React from 'react'
import Good from './index';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import ModalView from '../ModalView';

enzyme.configure({adapter: new Adapter()});

const setup = props => {
    const component = enzyme.shallow(
        <Good {...props} />
    );

    return {
        component: component
    }
};

describe('Good component', () => {
    it('should render all Good details', () => {
        const {component} = setup({
            good: {
                _id: '1',
                productName: 'Patata',
                picture: 'Picture1',
                discountType: '%',
                discount: 20,
                category: 1,
                reusePeriod: 1,
                initialPrice: 50,
                pendingUnits: 3
            },
            actions: {
                goodsActions: {},
                modalActions: {},
            }
        });
        expect(component.find('.name').text()).toEqual('Patata');
        expect(component.find('.goodImg').props().src).toEqual('Picture1');
        expect(component.find('.appliedDiscount').text()).toEqual('20%');
        expect(component.find('.category').props().catvalue).toEqual(1);
        expect(component.find('.reusePeriod').text()).toEqual('1');
        expect(component.find('.originalPrice').text()).toEqual('50€');
        expect(component.find('.pendingUnits').text()).toEqual('3');
        expect(component.find('.currentPrice').text()).toEqual('40.00€');
    })
});

describe('Good actions', () => {
    let wrapperGood, wrapperModalView
    //Our mock locale functions to replace the ones provided by mapDispatchToProps
    const mockActionsfn = jest.fn()
    const mockGood =
        {
            "key": 1,
            "_id": "1",
            "productName": "Barra de pa A",
            "picture": "http://www.fruteriasanpelayo.com/media/catalog/product/cache/1/image/680x560/75d5da3c2391ff3c948ada8220a45b7b/p/a/pan_barra_1.jpg",
            "initialPrice": 0.60,
            "discountType": "%",
            "discount": 20,
            "category": 1,
            "reusePeriod": 1,
            "pendingUnits": 60
        }

    const mockModal = {
        isOpen: true,
        good: mockGood,
    }

    const actions = {
        setLocale: mockActionsfn,
        goodsActions: {
            dispatchReceiveGoods: mockActionsfn,
            dispatchDeleteGood: mockActionsfn,
        },
        modalActions: {
            dispatchToggleModal: mockActionsfn,
            dispatchToggleModalEdit: mockActionsfn,
            dispatchCleanModalState: mockActionsfn,
        }
    }

    beforeEach(() => {
        wrapperGood = shallow(<Good actions={actions} good={mockGood}/>)
        wrapperModalView = shallow(<ModalView modal={mockModal} actions={actions}/>)
    })

    describe('When edit button is pressed', () => {
        it('should call the mock functions', () => {
            wrapperGood.find('.btnEdit').simulate(
                'click',
                {
                    preventDefault() {
                    }
                }
            )

            expect(mockActionsfn.mock.calls.length).toEqual(1)
        })
    })

    describe('When delete button is pressed', () => {
        it('should call the mock functions', () => {
            wrapperGood.find('.btnDelete').simulate(
                'click',
                {
                    preventDefault() {
                    }
                }
            )

            expect(mockActionsfn.mock.calls.length).toEqual(2)
        })
    })
})