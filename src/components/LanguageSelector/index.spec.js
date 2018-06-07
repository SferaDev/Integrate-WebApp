import React from 'react'
import LanguageSelector from './index';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({adapter: new Adapter()});
jest.mock('../../api/locale')

const setup = props => {
    const component = enzyme.shallow(
        <LanguageSelector {...props}/>
    );

    return {
        component: component
    }
};

describe('Incentive component', () => {
    it('Should have the language passed as a prop', () => {
        const {component} = setup({
            lang: 'en',
            actions: {
                setLocale: {}
            }
        });
        expect(component.find('.languageSelectorInput').props().value).toEqual('en');
    })

    it('Should have the language catalan if a prop refering to an uknown language is passed', () => {
        const {component} = setup({
            lang: 'chinese',
            actions: {
                setLocale: {}
            }
        });
        expect(component.find('.languageSelectorInput').props().value).toEqual('ca');
    })

    it('Should update the language when a setLocale action is dispatched', () => {
        const {component} = setup({
            lang: 'es',
            actions: {
                setLocale: {}
            }
        })

        let anotherLang = 'en'

        component.setProps({lang: anotherLang})

        expect(component.find('.languageSelectorInput').props().value).toEqual('en')

        /*

        component.find('.languageSelectorInput').simulate('change', {target: {value: 'es'}})

        expect(component.find('.languageSelectorInput').props().value).toEqual('es')
        */
    })
})