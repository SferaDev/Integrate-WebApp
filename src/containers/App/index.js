import React, {Component} from 'react';
import './style.css';
import DiscountCouponList from '../../components/DiscountCouponList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <DiscountCouponList couponsList={this.state}/>
            </div>
        );
    }
}

export default App;
