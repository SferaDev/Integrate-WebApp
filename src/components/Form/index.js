import React, {Component} from 'react';
import './style.css';


export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            primerCognom: '',
            segonCognom: '',
            NIF: '',
            email: '',
            nomEntitat: '',
            direccio: ''
        };
        this.changeNom = this.changeNom.bind(this);
        this.changePrimerCognom = this.changePrimerCognom.bind(this);
        this.changeSegonCognom = this.changeSegonCognom.bind(this);
        this.changeNif = this.changeNif.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeEntitat = this.changeEntitat.bind(this);
        this.changeDireccio = this.changeDireccio.bind(this);
        this.comprova = this.comprova.bind(this);
    }

    changeNom(event) {
        this.setState({nom: event.target.value});
    }

    changePrimerCognom(event) {
        this.setState({primerCognom: event.target.value});
    }

    changeSegonCognom(event) {
        this.setState({segonCognom: event.target.value});
    }

    changeNif(event) {
        this.setState({NIF: event.target.value});
    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    changeEntitat(event) {
        this.setState({nomEntitat: event.target.value});
    }

    changeDireccio(event) {
        this.setState({direccio: event.target.value});
    }

    comprova() {
        if (this.state.nom === '' || this.state.primerCognom === '' || this.state.segonCognom === '' || this.state.email === '' || this.state.NIF === '' || this.state.nomEntitat === '' || this.state.direccio === '') {
            document.getElementById("TextError").style.visibility = "visible";
        }
        else {
            const Entitat = {
                nom: this.state.nom,
                primerCognom: this.state.primerCognom,
                segonCognom: this.state.segonCognom,
                NIF: this.state.NIF,
                email: this.state.email,
                nomEntitat: this.state.nomEntitat,
                direccio: this.state.direccio
            };

            this.addToList(Entitat);

        }
    }


    render() {

        return (<div className="Fons">
            <div className="Form">
                <h1 className="HeaderForm">Formulari de sol·licitud</h1>
                <hr className="MainLine"/>
                <input type="text" className="TextForm" placeholder="Nom *" value={this.state.nom}
                       onChange={this.changeNom}></input>
                <input type="text" className="FirstSurnameText" placeholder="Primer Cognom *"
                       value={this.state.primerCognom} onChange={this.changePrimerCognom}></input>
                <input type="text" className="SecondSurnameText" placeholder="Segon Cognom *"
                       value={this.state.segonCognom} onChange={this.changeSegonCognom}></input>
                <input type="text" className="TextForm" placeholder="NIF *" value={this.state.NIF}
                       onChange={this.changeNif}></input>
                <input type="text" className="TextForm" placeholder="Email *" value={this.state.email}
                       onChange={this.changeEmail}></input>
                <input type="text" className="TextForm" placeholder="Nom de l'entitat *" value={this.state.nomEntitat}
                       onChange={this.changeEntitat}></input>
                <input type="text" className="TextForm" placeholder="Direcció de l'entitat *"
                       value={this.state.direccio} onChange={this.changeDireccio}></input>
                <button className="ButtonForm" onClick={this.comprova}>
                    Enviar
                </button>
                <p className="Error" id="TextError" align="center">S'han d'emplenar tots els camps!</p>
            </div>
        </div>);
    }

    /*addToList(entitat) {
        store.dispatch(addToList(entitat));
    }*/
}