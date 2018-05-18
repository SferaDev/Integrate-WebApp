import './style.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input} from 'reactstrap';
import {FormattedMessage} from 'react-intl';

class LanguageSelector extends Component {
    handleChangeLanguage = (event) => {
        this.props.actions.localeSet(event.target.value)
    };

    constructor(props) {
        super(props);
        this.state = {
            lang: 'ca'
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.lang) {
            if (nextProps.lang !== this.state.lang) this.setState({lang: nextProps.lang});
        }
    }

    render() {
        return (
            <div className="languageSelector">
                <div className="integrateEntities">
                    <div className="integrateLogo">Integrate&nbsp;</div>
                    <div>
                        <FormattedMessage id='languageSelector.entities'
                                          defaultMessage='Entitats'/>
                    </div>
                </div>
                <div>
                    <Input required type="select" name="language" id="language"
                           onChange={this.handleChangeLanguage} value={this.state.lang}>
                        <option value="ca">Català</option>
                        <option value="es">Español</option>
                        <option value="en">English</option>
                    </Input>
                </div>
            </div>
        );
    }
}

LanguageSelector.propTypes = {
    lang: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
};

export default LanguageSelector