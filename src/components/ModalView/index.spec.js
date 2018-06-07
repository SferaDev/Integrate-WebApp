import React from 'react'
import ModalView from './index'
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mountWithIntl } from '../../../helpers/intl-enzyme-test-helper.js';

enzyme.configure({adapter: new Adapter()});
jest.mock('../../api/cloudinary.js')

const setup = props => {
    const component = mountWithIntl(
        <ModalView {...props}/>
    );

    return {
        component: component
    }
};

const setupWithShallow = props => {
    const component = enzyme.shallow(
        <ModalView {...props}/>
    )

    return {
        component: component
    }
}

describe('ModalView component', () => {
    it('Should handle a good passed as a prop', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: {}
            },
            actions: {
                goodsActions: {},
                modalActions: {},
            }
        });

        component.setProps({
            modal: {
                isOpen: true,
                good: {
                    productName: 'Pizza',
                    initialPrice: 3.00,
                    discount: 3.00,
                    discountType: '%',
                    pendingUnits: 3,
                    reusePeriod: 1,
                    category: 1,
                    picture: 'url',
                }
            }
        })

        expect(component.find('.goodName').first().props().value).toEqual('Pizza');
        expect(component.find('.initialPrice').first().props().value).toEqual(3);
        expect(component.find('.discount').first().props().value).toEqual(3);
        expect(component.find('.discountType').first().props().value).toEqual('%');
        expect(component.find('.pendingUnits').first().props().value).toEqual(3);
        expect(component.find('.reusePeriod').first().props().value).toEqual(1);
        expect(component.find('.category').first().props().value).toEqual(1);
        expect(component.find('#imgPreview').first().props().src).toEqual('url');

        expect(component.find('.goodCategoryNutrition').first().text()).toEqual('Alimentació')
        expect(component.find('.goodCategoryCulture').first().text()).toEqual('Cultura')
        expect(component.find('.goodCategoryEducation').first().text()).toEqual('Formació')
        expect(component.find('.goodCategoryMobility').first().text()).toEqual('Mobilitat')
        expect(component.find('.goodCategoryTechnology').first().text()).toEqual('Tecnologia')
        expect(component.find('.goodCategoryHealthcare').first().text()).toEqual('Salut')
        expect(component.find('.goodCategorySports').first().text()).toEqual('Esports')
        expect(component.find('.goodCategoryLeisure').first().text()).toEqual('Lleure')
        expect(component.find('.goodCategoryOthers').first().text()).toEqual('Altres')
    })

    it('Should be initialized with default values if a prop Good isnt passed', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {},
                modalActions: {},
            }
        });

        expect(component.find('.goodName').first().props().value).toEqual('');
        expect(component.find('.initialPrice').first().props().value).toEqual(0);
        expect(component.find('.discount').first().props().value).toEqual(0);
        expect(component.find('.discountType').first().props().value).toEqual('%');
        expect(component.find('.pendingUnits').first().props().value).toEqual(1);
        expect(component.find('.reusePeriod').first().props().value).toEqual(1);
        expect(component.find('.category').first().props().value).toEqual(1);
        expect(component.find('#imgPreview').first().props().src).toEqual('http://www.asiaoceania.org/aogs2018/img/no_uploaded.png');
    })

    it('Should dispatch an Add Good action when there are not initial props and the form is filled and submitted', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setState({
            productName: 'Pizza',
            initialPrice: 3.00,
            discount: 3.00,
            discountType: '%',
            pendingUnits: 3,
            reusePeriod: 1,
            category: 1,
            picture: 'url',
        })

        component.find('.validateButton').simulate('click')
        expect(component.props().actions.goodsActions.dispatchAddGood.mock.calls.length).toBe(1)
        expect(component.props().actions.modalActions.dispatchToggleModal.mock.calls.length).toBe(1)
        expect(component.props().actions.modalActions.dispatchCleanModalState.mock.calls.length).toBe(1)
    })

    it('Should dispatch an Edit Good action when there are initial props and the form is filled and submitted', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setProps({
            modal: {
                isOpen: true,
                good: {
                    productName: 'Pizza',
                    initialPrice: 3.00,
                    discount: 3.00,
                    discountType: '%',
                    pendingUnits: 3,
                    reusePeriod: 1,
                    category: 1,
                    picture: 'url',
                }
            }
        })

        component.find('.validateButton').simulate('click')
        expect(component.props().actions.goodsActions.dispatchEditGood.mock.calls.length).toBe(1)
        expect(component.props().actions.modalActions.dispatchToggleModal.mock.calls.length).toBe(1)
        expect(component.props().actions.modalActions.dispatchCleanModalState.mock.calls.length).toBe(1)
    })

    it('Should dispatch an onChange action when an image is submitted to the form', () => {
        const {component} = setupWithShallow({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setProps({
            modal: {
                isOpen: true,
                good: {
                    productName: 'Pizza',
                    initialPrice: 3.00,
                    discount: 3.00,
                    discountType: '%',
                    pendingUnits: 3,
                    reusePeriod: 1,
                    category: 1,
                    picture: 'url',
                }
            }
        })

        component.find('.file').first().simulate('change')
        expect(component.find('#imgPreview').props().src).toEqual('url')
    })

    it('Should dispatch an onChange action when the discount type is modified', () => {
        const {component} = setupWithShallow({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setProps({
            modal: {
                isOpen: true,
                good: {
                    productName: 'Pizza',
                    initialPrice: 3.00,
                    discount: 3.00,
                    discountType: '€',
                    pendingUnits: 3,
                    reusePeriod: 1,
                    category: 1,
                    picture: 'url',
                }
            }
        })

        component.find('.discountType').first().simulate('change', {target: { value: '%'}})
        expect(component.find('.discountType').first().props().value).toEqual('%')
    })

    it('Should trigger an alert when there are not initial props and the form is filled and submitted without productName', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setState({
            productName: '',
            initialPrice: 3.00,
            discount: 3.00,
            discountType: '%',
            pendingUnits: 3,
            reusePeriod: 1,
            category: 1,
            picture: 'url',
        })

        spyOn(window, 'alert')
        component.find('.validateButton').simulate('click')
        expect(window.alert).toHaveBeenCalledWith('Has d\'assignar un nom al val!')
    })

    it('Should trigger an alert when there are not initial props and the form is filled and submitted with a negative initial price', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setState({
            productName: 'Pizza',
            initialPrice: -3.00,
            discount: 3.00,
            discountType: '%',
            pendingUnits: 3,
            reusePeriod: 1,
            category: 1,
            picture: 'url',
        })

        spyOn(window, 'alert')
        component.find('.validateButton').simulate('click')
        expect(window.alert).toHaveBeenCalledWith('El preu original no pot ser negatiu')
    })

    it('Should trigger an alert when there are not initial props and the form is filled and submitted with a negative discount', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setState({
            productName: 'Pizza',
            initialPrice: 3.00,
            discount: -3.00,
            discountType: '%',
            pendingUnits: 3,
            reusePeriod: 1,
            category: 1,
            picture: 'url',
        })

        spyOn(window, 'alert')
        component.find('.validateButton').simulate('click')
        expect(window.alert).toHaveBeenCalledWith('El descompte ha de tenir un valor positiu')
    })

    it('Should trigger an alert when there are not initial props and the form is filled and submitted with a percentual discount type and a discount value greater than 99', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setState({
            productName: 'Pizza',
            initialPrice: 3.00,
            discount: 100,
            discountType: '%',
            pendingUnits: 3,
            reusePeriod: 1,
            category: 1,
            picture: 'url',
        })

        spyOn(window, 'alert')
        component.find('.validateButton').simulate('click')
        expect(window.alert).toHaveBeenCalledWith('El descompte ha de tenir un valor menor o igual que 99')
    })

    it('Should trigger an alert when there are not initial props and the form is filled and submitted with a negative pending units value', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setState({
            productName: 'Pizza',
            initialPrice: 3.00,
            discount: 3.00,
            discountType: '%',
            pendingUnits: -3,
            reusePeriod: 1,
            category: 1,
            picture: 'url',
        })

        spyOn(window, 'alert')
        component.find('.validateButton').simulate('click')
        expect(window.alert).toHaveBeenCalledWith('El valor d\'unitats pendents ha de ser positiu')
    })

    it('Should trigger an alert when there are not initial props and the form is filled and submitted with a negative reuse period', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setState({
            productName: 'Pizza',
            initialPrice: 3.00,
            discount: 3.00,
            discountType: '%',
            pendingUnits: 3,
            reusePeriod: -1,
            category: 1,
            picture: 'url',
        })

        spyOn(window, 'alert')
        component.find('.validateButton').simulate('click')
        expect(window.alert).toHaveBeenCalledWith('El període de reutilització ha de ser positiu')
    })

    it('Should trigger an alert when there are not initial props and the form is filled and submitted with a euros discount type and the value is greater or equal than the initial price', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setState({
            productName: 'Pizza',
            initialPrice: 3.00,
            discount: 3.00,
            discountType: '€',
            pendingUnits: 3,
            reusePeriod: 1,
            category: 1,
            picture: 'url',
        })

        spyOn(window, 'alert')
        component.find('.validateButton').simulate('click')
        expect(window.alert).toHaveBeenCalledWith('El descompte ha de ser inferior al preu original')
    })

    it('Should trigger an alert when there are not initial props and the form is filled and submitted with a decimal pending units value', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setState({
            productName: 'Pizza',
            initialPrice: 3.00,
            discount: 2.00,
            discountType: '€',
            pendingUnits: 3.2,
            reusePeriod: 1,
            category: 1,
            picture: 'url',
        })

        spyOn(window, 'alert')
        component.find('.validateButton').simulate('click')
        expect(window.alert).toHaveBeenCalledWith('El valor d\'unitats pendents no pot ser decimal')
    })

    it('Should trigger an alert when there are not initial props and the form is filled and submitted with a decimal reuse period value', () => {
        const {component} = setup({
            modal: {
                isOpen: true,
                good: null
            },
            actions: {
                goodsActions: {
                    dispatchAddGood: jest.fn(),
                    dispatchEditGood: jest.fn()
                },
                modalActions: {
                    dispatchCleanModalState: jest.fn(),
                    dispatchToggleModal: jest.fn(),
                },
            }
        });

        component.setState({
            productName: 'Pizza',
            initialPrice: 3.00,
            discount: 2.00,
            discountType: '€',
            pendingUnits: 3,
            reusePeriod: 1.5,
            category: 1,
            picture: 'url',
        })

        spyOn(window, 'alert')
        component.find('.validateButton').simulate('click')
        expect(window.alert).toHaveBeenCalledWith('El valor del temps de reutilització no pot ser decimal')
    })
})