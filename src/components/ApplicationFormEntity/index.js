import React, {Component} from 'react';
import './style.css';
import {Maps} from "../Maps";

export class ApplicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salesmanFirstName: '',
            salesmanLastName: '',
            nif: '',
            email: '',
            phone: '',
            description: '',
            name: '',
            addressName: '',
            addressLatitude: '',
            addressLongitude: ''
        };
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeNif = this.changeNif.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeNameEntity = this.changeNameEntity.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.onSentClicked = this.onSentClicked.bind(this);
        this.onCloseClicked = this.onCloseClicked.bind(this);
        this.onUserSearched = this.onUserSearched.bind(this);
    }


    changeFirstName(event) {
        this.setState({salesmanFirstName: event.target.value});
    }

    changeLastName(event) {
        this.setState({salesmanLastName: event.target.value});
    }

    changeNif(event) {
        this.setState({nif: event.target.value});
    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    changeNameEntity(event) {
        this.setState({name: event.target.value});
    }

    changePhone(event) {
        this.setState({phone: event.target.value});
    }

    changeDescription(event) {
        this.setState({description: event.target.value});
    }

    onSentClicked(event) {
        if (this.state.salesmanFirstName === '' || this.state.salesmanLastName === '' || this.state.email === '' || this.state.nif === '' || this.state.name === '' || this.state.addressName === '' || this.state.description === '' || this.state.phone === '') {
            document.getElementById("TextError").style.visibility = "visible";
        }
        else {
            event.preventDefault();
            console.log(this.state)
            //const {history} = this.props;
            //history.push('/');

        }
    }

    onCloseClicked(event) {
        event.preventDefault();
        const {history} = this.props;
        history.push('/');
    }


    onUserSearched(address, lat, lng) {
        this.setState({addressName: address});
        this.setState({addressLatitude: lat});
        this.setState({addressLongitude: lng});


    }


    render() {

        return (
            <div className="Fons row">
                <div className="Form col-md-6">
                    <h1 className="HeaderForm">Formulari de sol·licitud</h1>
                    <button className="closeButton" onClick={this.onCloseClicked}><h3>×</h3></button>
                    <hr className="MainLine"/>
                    <input type="text" className="FirstNameText" placeholder="Nom *"
                           value={this.state.salesmanFirstName} onChange={this.changeFirstName}></input>
                    <input type="text" className="SecondNameText" placeholder="Cognoms *"
                           value={this.state.salesmanLastName} onChange={this.changeLastName}></input>
                    <input type="email" className="EmailNameText" placeholder="Email *" value={this.state.email}
                           onChange={this.changeEmail}></input>
                    <input type="text" className="NumberText" placeholder="Telèfon *" value={this.state.phone}
                           onChange={this.changePhone}></input>
                    <input type="text" className="EmailNameText" placeholder="Nom de l'entitat *"
                           value={this.state.name}
                           onChange={this.changeNameEntity}></input>
                    <input type="text" className="NumberText" placeholder="NIF *"
                           value={this.state.nif}
                           onChange={this.changeNif}></input>
                    <textarea type="text" className="DescriptionText" placeholder="Descripció de l'entitat *"
                              value={this.state.description} onChange={this.changeDescription}></textarea>

                    <input type="text" className="TextForm" placeholder="Direcció de l'entitat *"
                           value={this.state.addressName} readOnly></input>
                    <p className="address">Busca la teva adreça en el mapa</p>
                    <button className="ButtonForm" onClick={this.onSentClicked}>
                        Enviar
                    </button>
                    <p className="Error" id="TextError" align="center">S'han d'emplenar tots els camps!</p>
                </div>
                <div className="Map col-sm-6">
                    <Maps onUserSearched={this.onUserSearched}/>
                </div>
            </div>

        );
    }

}