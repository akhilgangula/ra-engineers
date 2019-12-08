
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDom  from "react-dom";
import * as serviceWorker from './serviceWorker';
import Sidebar from './Navigation/sidebar'
import Logo from './Navigation/Logo'
import Header from './Navigation/header'
import ContentArea from './Content/'
import Main from './Main'
import './assets/plugins/fontawesome-free/css/all.min.css'
import './assets/css/adminlte.min.css'
import './assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
import TopNavBar from './Navigation/topNavBar'
import { BrowserRouter as Router, Route, Switch, ReactRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

ReactDom.render(<Main/>, document.getElementById('wrapper'))
ReactDom.render(<Logo/>, document.getElementById('logo-section'))
ReactDom.render(<Sidebar/>, document.getElementById('dashboard-sidebar'))
ReactDom.render(<Header/>, document.getElementById('content-header'))
ReactDom.render(<ContentArea/>, document.getElementById('main-boby'))
ReactDom.render(<TopNavBar/>, document.getElementById('top-nav-bar'))

serviceWorker.unregister();

