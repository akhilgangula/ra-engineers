import React from "react";
import Sidebar from './sidebar'
import dashLogo from './../assets/img/AdminLTELogo.png'
class Logo extends React.Component {

    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
				<a href="index.html" className="brand-link">
					<img src={dashLogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}}/>
					<span className="brand-text font-weight-light">RA Dashboard</span>
				</a>
				<Sidebar/>
			</aside>
        )
    }
}

export default Logo