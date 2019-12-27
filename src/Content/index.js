import React from 'react'
import Home from './Home';
import AllOrders from './AllOrders'
import { Route,Switch } from 'react-router-dom'
import PageNotFound from './404NotFound'
import CreateUser from './UserMgmt/create'
import GenerateInvoice from './Invoice/create'
import ViewInvoice from './Invoice/View'
import CreateOrder from './Orders/Create';
import CreateRequest from './Quote/Request'
import Price from './Quote/Price';
import ViewOrder from './Orders/View'
class ContentArea extends React.Component {

    render=()=> {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    
                    <Route path="/allOrders" component={AllOrders} />

                    
                    <Route path="/customers/create" component={CreateUser} />
                    
                    {/** Request / Pricing / Order */}
                    <Route path="/quote/create" component={CreateRequest} />
                    <Route path="/quote/price" component={Price} />
                    <Route path="/order/create" component={CreateOrder} />
                    <Route path="/order/view" component={ViewOrder} />
                    {/** Invoice */}
                    <Route path="/invoice/create" component={GenerateInvoice} />
                    <Route path="/invoice/view" component={ViewInvoice} />
                    
                    <Route component={PageNotFound} />
                    
                </Switch>
            </div>
        )
    }
}

export default ContentArea