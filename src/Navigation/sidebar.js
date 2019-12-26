import React from "react";
import profilePic from './../assets/img/user2-160x160.jpg'
import ListItem from './../CustomComponents/ListItem'
import List from './../CustomComponents/List'
import NavHeader from './../CustomComponents/navHeader'
import dashLogo from './../assets/img/AdminLTELogo.png'
class Sidebar extends React.Component {

	componentDidMount() {
		var classname = document.getElementsByClassName('has-treeview')
		Array.from(classname).forEach(function (element) {
			element.addEventListener('click', (event) => {

				var parent = event.target;
				while (parent.nodeName !== 'LI') {
					parent = parent.parentNode
				}
				var name = "menu-open";
				var arr = parent.className.split(" ");
				var index = arr.indexOf(name);
				if (index == -1) {
					parent.className += " " + name;
				} else {
					arr.splice(index, 1);
					parent.className = arr.join(' ')
				}
			});
		});

	}

	render = () => {
		return (
			<aside className="main-sidebar sidebar-dark-primary elevation-4">
				<a href="index.html" className="brand-link">
					<img src={dashLogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
					<span className="brand-text font-weight-light">RA Dashboard</span>
				</a>
				

				<div className="sidebar">
					<div className="user-panel mt-3 pb-3 mb-3 d-flex">
						<div className="image">
							<img src={profilePic} className="img-circle elevation-2" alt="User Image" />
						</div>
						<div className="info">
							<a href="#" className="d-block">Admin</a>
						</div>
					</div>
					<nav className="mt-2">
						<ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
							<ListItem name="Home" styleClass="nav-link" iconStyle="fas fa-home" isTreeView='false' hyperlink="/" />
							<NavHeader styleClass="nav-header" name="My Workspace" />
							<ListItem name="Calendar" styleClass="nav-link" iconStyle="fas fa-calendar-alt" isTreeView='false' hyperlink="/calender" />
							<ListItem name="Contacts" styleClass="nav-link" iconStyle="fas fa-id-card" isTreeView='false' hyperlink="/profile/contacts" />
							<ListItem name="Mailbox" styleClass="nav-link" iconStyle="far fa-envelope" isTreeView='true' hyperlink="#">
								<List>
									<ListItem name="Inbox" styleClass="nav-link" iconStyle="fas fa-inbox" isTreeView='false' hyperlink="/mail:indox" />
									<ListItem name="Compose" styleClass="nav-link" iconStyle="fas fa-pen" isTreeView='false' hyperlink="/mail:compose" />
									<ListItem name="Read" styleClass="nav-link" iconStyle="fab fa-readme" isTreeView='false' hyperlink="/mail:read" />
								</List>
							</ListItem>
							<ListItem name="Profile Setting" styleClass="nav-link" iconStyle="fas fa-book" isTreeView='true' hyperlink="#">
								<List>
									<ListItem name="Profile" styleClass="nav-link" iconStyle="fas fa-user" isTreeView='false' hyperlink="/profile/view" />
									<ListItem name="Recover Password" styleClass="nav-link" iconStyle="fas fa-key" isTreeView='false' hyperlink="/profile/recoverPassword" />
									<ListItem name="Lockscreen" styleClass="nav-link" iconStyle="fas fa-lock" isTreeView='false' hyperlink="/profile/lock" />
								</List>
							</ListItem>
							<NavHeader styleClass="nav-header" name="Manage Orders" />
							<ListItem name="View All Orders" styleClass="nav-link" iconStyle="fas fa-binoculars" isTreeView='false' hyperlink="/allOrders" />
							<ListItem name="Update tracking status" styleClass="nav-link" iconStyle="fas fa-map-marker-alt" isTreeView='false' hyperlink="/orderStatus" />
							<ListItem name="Billing" styleClass="nav-link" iconStyle="fas fa-file-invoice" isTreeView='true' hyperlink="#">
								<List>
									<ListItem name="View All Bills" styleClass="nav-link" iconStyle="fas fa-file-invoice-dollar" isTreeView='false' hyperlink="/billing/view" />
									<ListItem name="Create new bill" styleClass="nav-link navigatable" iconStyle="fas fa-receipt" isTreeView='false' hyperlink="/billing/createNew" />
									<ListItem name="Edit bill" styleClass="nav-link" iconStyle="fas fa-file-alt" isTreeView='false' hyperlink="/billing/edit" />
								</List>
							</ListItem>
							<ListItem name="Manage Users" styleClass="nav-link" iconStyle="fas fa-users" isTreeView='true' hyperlink='#'>
								<List>
									<ListItem name="Create a user" styleClass="nav-link" iconStyle="fas fa-user-plus" isTreeView='false' hyperlink="/customers/create" />
									<ListItem name="Manage user" styleClass="nav-link" iconStyle="fas fa-users-cog" isTreeView='false' hyperlink="/customers/manage" />
								</List>
							</ListItem>
							
							<ListItem name="Request For Quote" styleClass="nav-link" iconStyle="fas fa-lock" isTreeView='false' hyperlink="/quote/create" />
							<ListItem name="Quote Request" styleClass="nav-link" iconStyle="fas fa-lock" isTreeView='false' hyperlink="/quote/price" />
							
							<ListItem name="Place Order" styleClass="nav-link" iconStyle="fas fa-lock" isTreeView='false' hyperlink="/order/create" />
							<ListItem name="Generate Invoice" styleClass="nav-link navigatable" iconStyle="fas fa-receipt" isTreeView='false' hyperlink="/invoice/create" />
						</ul>
					</nav>
				</div>
			</aside>
		)
	}
}

export default Sidebar