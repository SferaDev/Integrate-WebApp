import React from 'react';
import LanguageSelector from '../../components/LanguageSelector';
import {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import GoodsList from '../../components/GoodsList';
import ModalView from '../../components/ModalView';
import * as Enzyme from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';
import {GoodsContainer} from './index';

Enzyme.configure({adapter: new Adapter()});

describe('Goods', () => {
    let wrapperLanguageSelector, wrapperGoodsList, wrapperModalView
    //Our mock locale functions to replace the ones provided by mapDispatchToProps
    const mockActionsfn = jest.fn()
    const mockLang = 'mock'
    const mockGoods = [
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
        },
    ]
    const mockModal = {
        isOpen: true,
        good: mockGoods[0],
    }

    const actions = {
        setLocale: mockActionsfn,
        goodsActions: {
            dispatchReceiveGoods: mockActionsfn,
        },
        modalActions: {
            dispatchToggleModal: mockActionsfn,
            dispatchCleanModalState: mockActionsfn,
        }
    }

    beforeEach(() => {
        //pass the mock functions as the LanguageSelector prop
        wrapperLanguageSelector = shallow(<LanguageSelector actions={actions} lang={mockLang}/>)
        wrapperGoodsList = shallow(<GoodsList actions={actions} goods={mockGoods}/>)
        wrapperModalView = shallow(<ModalView modal={mockModal} actions={actions}/>)
    })

    describe('When language selector is changed', () => {
        it('should call the mock functions', () => {
            const event = {target: {value: "spam"}}
            wrapperLanguageSelector.find('.languageSelectorInput').simulate(
                'change',
                event,
                {preventDefault() {}}
            )

            expect(mockActionsfn.mock.calls.length).toEqual(1)
        })
    })

    describe('When goods list is rendered', () => {
        it('should call the mock functions when asked to add a good', () => {
            wrapperGoodsList.find('.stickyAddGoodButton').simulate(
                'click',
                {preventDefault() {}}
            )

            expect(mockActionsfn.mock.calls.length).toEqual(3)
        })
    })

    describe('When the modal related to goods management is rendered', () => {
        it('should call the mock functions when the good name is modified', () => {
            const event = {target: {value: "spam"}}
            wrapperModalView.find('.goodName').simulate(
                'change',
                event,
                {preventDefault() {}}
            )

            expect(mockActionsfn.mock.calls.length).toEqual(3)
        })

        it('should call the mock functions when the initial price is modified', () => {
            const event = {target: {value: 420}}
            wrapperModalView.find('.initialPrice').simulate(
                'change',
                event,
                {preventDefault() {}}
            )

            expect(mockActionsfn.mock.calls.length).toEqual(3)
        })

        it('should call the mock functions when the discount is modified', () => {
            const event = {target: {value: 420}}
            wrapperModalView.find('.discount').simulate(
                'change',
                event,
                {preventDefault() {}}
            )

            expect(mockActionsfn.mock.calls.length).toEqual(3)
        })

        it('should call the mock functions when the discount type is modified', () => {
            const event = {target: {value: '%'}}
            wrapperModalView.find('.initialPrice').simulate(
                'change',
                event,
                {preventDefault() {}}
            )

            expect(mockActionsfn.mock.calls.length).toEqual(3)
        })

        it('should call the mock functions when the pending units are modified', () => {
            const event = {target: {value: 30}}
            wrapperModalView.find('.pendingUnits').simulate(
                'change',
                event,
                {preventDefault() {}}
            )

            expect(mockActionsfn.mock.calls.length).toEqual(3)
        })

        it('should call the mock functions when the reuse period is modified', () => {
            const event = {target: {value: 10}}
            wrapperModalView.find('.reusePeriod').simulate(
                'change',
                event,
                {preventDefault() {}}
            )

            expect(mockActionsfn.mock.calls.length).toEqual(3)
        })

        it('should call the mock functions when the category is modified', () => {
            const event = {target: {value: 2}}
            wrapperModalView.find('.category').simulate(
                'change',
                event,
                {preventDefault() {}}
            )

            expect(mockActionsfn.mock.calls.length).toEqual(3)
        })

        it('should call the mock functions when the cancel button is clicked', () => {
            wrapperModalView.find('.cancelButton').simulate(
                'click',
                {preventDefault() {}}
            )

            expect(mockActionsfn.mock.calls.length).toEqual(5)
        })
    })
})

describe('Snapshots', () => {
    it('renders correctly', () => {
        const goods = [
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
            },
        ]

        const modal = {
            isOpen: true,
            good: {
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
        }

        const userName = 'Telepizza'

        const auth = {
            isLoginPending: false,
            isLoginSuccess: true,
            loginError: null,
            user: {
                name: 'Telepizza',
                address: 'Address',
                description: 'description',
                validationCode: '423423',
            },
            token: 'token',
        }

        const lang = 'en'

        const actions = {
            goodsActions: {
                dispatchReceiveGoods: jest.fn(),
                dispatchAddGood: jest.fn(),
                dispatchDeleteGood: jest.fn(),
                dispatchEditGood: jest.fn(),
            },
            localeActions: {
                setLocale: jest.fn(),
            },
            authActions: {
                setUser: jest.fn(),
                logoutAction: jest.fn(),
                deleteEntity: jest.fn(),
            },
            modalActions: {
                dispatchToggleModal: jest.fn(),
                dispatchToggleModalEdit: jest.fn(),
                dispatchCleanModalState: jest.fn(),
            },
        }

        const goodsContainer = mount(<GoodsContainer goods={goods} modal={modal} auth={auth} actions={actions} lang={lang} userName={userName}/>)
        expect(EnzymeToJson(goodsContainer)).toMatchSnapshot();
    });
})