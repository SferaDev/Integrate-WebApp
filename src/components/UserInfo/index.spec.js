import React from 'react'
import {expect} from 'chai';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserInfo from "./index"




enzyme.configure({adapter: new Adapter()});

describe('<UserInfo />', () => {
    const User = [
        {
            name: "Mercadona",
            addressName: "Carrer de Joan Batllori, 21, 08980 Sant Feliu de Llobregat, Barcelona, Spain",
            description: "Venda d'aliments",
            picture: "goldenmedal.png"
        }
    ];



    it('it has a div with an image and good user props', () => {

        const props =  {
                name: User[0].name,
                addressName: User[0].addressName,
                description: User[0].description,
                picture: User[0].picture

        };

        const wrapper = enzyme.shallow(<UserInfo user={props}/>);
        expect(wrapper.find('div')).length(1);
        expect(wrapper.find('img')).length(1);
        expect(wrapper.instance().props.user).to.equal(props);



    });

    const User2 = [
        {
            name: "Mercadona",
            addressName: "Carrer de Joan Batllori, 21, 08980 Sant Feliu de Llobregat, Barcelona, Spain",
            description: "Venda d'aliments",
            picture: "picture"
        }
    ];

    it('user props', () => {

        const props =  {
            name: User2[0].name,
            addressName: User2[0].addressName,
            description: User2[0].description,
            picture: User2[0].picture

        };

        const wrapper = enzyme.shallow(<UserInfo user={props}/>);
        expect(wrapper.instance().props.user.picture).to.equal('marketicon.png');

    });
})