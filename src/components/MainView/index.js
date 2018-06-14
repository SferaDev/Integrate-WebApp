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
                    <NavbarBrand href="/main">
                        {this.props.userName}
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav  navbar>
                            <NavItem>
                                <NavLink href="/goods" style={
                                    this.props.active === 'goods' ? {
                                        fontWeight: 500,
                                        color: 'white',
                                    } : null
                                }>
                                    <FormattedMessage id='main.goods' defaultMessage='Vals'/>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/changepassword" style={
                                    this.props.active === 'changePassword' ? {
                                        fontWeight: 500,
                                        color:'white',
                                    } : null
                                }>
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
    userName: PropTypes.string.isRequired,
};
