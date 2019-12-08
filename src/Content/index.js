import React from 'react'
import Home from './Home';
import Calender from './Calender';
import Billing from './Billing/create'
import View from './Billing/view'
import AllOrders from './AllOrders'
import OrderStatus from './OrderStatus'
class ContentArea extends React.Component {

    render=()=> {
        return (
			<OrderStatus/>
        )
    }
}

export default ContentArea