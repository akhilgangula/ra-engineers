import React from "react";

class TopNavBar extends React.Component {

    constructor() {
        super()
        this.handleDrawer = this.handleDrawer.bind(this)
    }

    handleDrawer = () => {
        console.log("called")
        var styles = document.body.className.split(' ')
        var name = "sidebar-collapse";
				var index = styles.indexOf(name);
				if (index == -1) {
					document.body.className += " " + name;
				} else {
					styles.splice(index, 1);
					document.body.className = styles.join(' ')
				}
    }

    render() {
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" data-widget="pushmenu" href="#" onClick={this.handleDrawer}>
							<i className="fas fa-bars"></i>
						</a>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<a href="index.html" className="nav-link">Home</a>
					</li>
				</ul>
			</nav>
        )
    }
}

export default TopNavBar