import React from "react";
import { BrowserRouter as Router  } from 'react-router-dom'
import ContentArea from './Content/'
import Sidebar from "./Navigation/sidebar";
class Main extends React.Component {

    render() {
        return (
            <div>
                <Router>
                <div id="top-nav-bar"></div>
                    <Sidebar/>
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