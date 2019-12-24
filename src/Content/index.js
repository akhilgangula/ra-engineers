import React from 'react'
import Home from './Home';
import Calender from './Calender';
import Billing from './Billing/create'
import View from './Billing/view'
import AllOrders from './AllOrders'
import OrderStatus from './OrderStatus'
import { Route,Switch } from 'react-router-dom'
import PageNotFound from './404NotFound'
import EditBilling from './Billing/edit'
import CreateUser from './UserMgmt/create'
import CreateRFQ from './Quote/RFQ'
import Response from './Quote/Response'
import CreateOrder from './Orders/Create';
class ContentArea extends React.Component {

    render=()=> {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/billing/createNew" component={Billing} />
                    <Route path="/billing/view" component={View} />
                    <Route path="/allOrders" component={AllOrders} />
                    <Route path="/orderStatus" component={OrderStatus} />
                    <Route path="/billing/edit" component={EditBilling} />
                    <Route path="/customers/create" component={CreateUser} />
                    <Route path="/quote/rfq" component={CreateRFQ} />
                    <Route path="/quote/response" component={Response} />
                    <Route path="/order/create" component={CreateOrder} />
                    <Route component={PageNotFound} />
                    
                </Switch>
            </div>
        )
    }
}

export default ContentArea