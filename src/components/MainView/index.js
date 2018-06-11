import React from 'react';
import './style.css';
import {FormattedMessage} from 'react-intl';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
     } from 'reactstrap';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

export default class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this)
        this.logout = this.logout.bind(this)
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout() {
        this.props.actions.logoutAction()
    }
    render() {
        return (
            <div className='navbarDiv'>
                <Navbar color="dark" dark expand="md" className='navbar'>
                    <NavbarBrand tag={Link} to="/main">
                        <FormattedMessage id='main.home' defaultMessage='Pàgina principal'/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav  navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/goods">
                                    <FormattedMessage id='main.goods' defaultMessage='Vals'/>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/changepassword">
                                    <FormattedMessage id='main.changepassword' defaultMessage='Canviar la contrasenya'/>
                                </NavLink>
                            </NavItem>
                            <NavItem className="Logout">
                                    <NavLink href="/" onClick={this.logout}>
                                    <FormattedMessage id='main.logout' defaultMessage='Sortir'/>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

MainView.propTypes = {
    actions: PropTypes.object.isRequired,
};
