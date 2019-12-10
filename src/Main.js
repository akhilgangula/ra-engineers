import React from "react";
import { Route, Link, BrowserRouter as Router,Switch  } from 'react-router-dom'
import Logo from './Navigation/Logo'
import ContentArea from './Content/'
class Main extends React.Component {

    render() {
        return (
            <div>
                <Router>
                <div id="top-nav-bar"></div>
                    <Logo/>
                <div id="logo-section">
                </div>
                <div className="content-wrapper">
                    <div className="content-header" id="content-header">
                    </div>
                    <section className="content" id='main-boby'>
                        <ContentArea/>
                    </section>
                </div>
                </Router>
            </div>
        )
    }
}

export default Main