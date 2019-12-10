
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDom  from "react-dom";
import * as serviceWorker from './serviceWorker';


import Header from './Navigation/header'

import Main from './Main'
import './assets/plugins/fontawesome-free/css/all.min.css'
import './assets/css/adminlte.min.css'
import './assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
import TopNavBar from './Navigation/topNavBar'

ReactDom.render(<Main/>, document.getElementById('wrapper'))
ReactDom.render(<Header/>, document.getElementById('content-header'))
ReactDom.render(<TopNavBar/>, document.getElementById('top-nav-bar'))

serviceWorker.unregister();

