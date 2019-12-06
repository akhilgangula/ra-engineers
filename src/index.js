import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDom  from "react-dom";
import * as serviceWorker from './serviceWorker';
import Sidebar from './Navigation/sidebar'
import Header from './Navigation/header'
import ContentArea from './Content/'
import './assets/plugins/fontawesome-free/css/all.min.css'
import './assets/css/adminlte.min.css'
import './assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
import $ from'jquery'
import './assets/plugins/jquery-mapael/maps/usa_states.min.js'

ReactDom.render(<Sidebar/>, document.getElementById('dashboard-sidebar'))
ReactDom.render(<Header/>, document.getElementById('content-header'))
ReactDom.render(<ContentArea/>, document.getElementById('main-boby'))

serviceWorker.unregister();