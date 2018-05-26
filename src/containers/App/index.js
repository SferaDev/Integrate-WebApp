import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import GoodsContainer from "../Goods";
import ChangePasswordContainer from "../ChangePassword";
import PasswordRecoveryContainer from "../PasswordRecovery";
import MainViewContainer from "../MainView";
import LoginContainer from "../Login";
import SignupContainer from "../Signup";
import {Redirect, Route, Switch} from "react-router";
import {connect} from "react-redux";

const App = ({auth}) => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={LoginContainer}/>

                {
                    !auth.isLoginPending && !auth.isLoginSuccess && <Redirect to='/'/>
                }

                <Route path="/signup" component={SignupContainer}/>
                <Route path='/reset' component={PasswordRecoveryContainer}/>

                <Route path='/goods' component={GoodsContainer}/>
                <Route path='/changepassword' component={ChangePasswordContainer}/>
                <Route path='/main' component={MainViewContainer}/>
            </Switch>
        </div>
    </Router>
)

const mapStateToProps = ({auth}) => ({
    auth,
})

export default connect(
    mapStateToProps,
    null,
)(App)