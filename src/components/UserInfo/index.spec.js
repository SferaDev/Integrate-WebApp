import React from 'react'
import {expect} from 'chai';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserInfo from "./index"




enzyme.configure({adapter: new Adapter()});

describe('<UserInfo />', () => {
    const user =
        {
            name: "Mercadona",
            addressName: "Carrer de Joan Batllori, 21, 08980 Sant Feliu de Llobregat, Barcelona, Spain",
            description: "Venda d'aliments",
            picture: "goldenmedal.png",
            validationCode: '666',
        }



    it('it has a div with an image and good user props', () => {

        const props =  {
                user: user,
                actions: {
                    deleteEntity: jest.fn(),
                }

        };

        const wrapper = enzyme.shallow(<UserInfo user={props.user} actions={props.actions}/>);
        expect(wrapper.find('div')).length(10);
        expect(wrapper.find('img')).length(0);
        expect(wrapper.instance().props.user).to.equal(props.user);



    });

    const user2 =
        {
            name: "Mercadona",
            addressName: "Carrer de Joan Batllori, 21, 08980 Sant Feliu de Llobregat, Barcelona, Spain",
            description: "Venda d'aliments",
            picture: "picture",
            validationCode: '666',
        }

    it('user props', () => {

        const props =  {
            user: user2,
            actions: {
                deleteEntity: jest.fn(),
            }

        };

        const wrapper = enzyme.shallow(<UserInfo user={props.user} actions={props.actions}/>);
        expect(wrapper.instance().props.user.picture).to.equal('marketicon.png');

    });
})