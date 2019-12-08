import React from "react";
import logo from './../assets/img/AdminLTELogo.png'
import profilePic from './../assets/img/user2-160x160.jpg'
import $ from 'jquery'
import ListItem from './../CustomComponents/ListItem'
import List from './../CustomComponents/List'
import NavHeader from './../CustomComponents/navHeader'
class Sidebar extends React.Component {

	componentDidMount() {
        var classname = document.getElementsByClassName('has-treeview')
        Array.from(classname).forEach(function(element) {
			element.addEventListener('click', (event) => {
				
				var parent = event.target;
				while(parent.nodeName !== 'LI') {
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

		var navigateClass = document.getElementsByClassName('navigatable')
		//sconsole.log(navigateClass)
		Array.from(classname).forEach(function(element) {
			element.addEventListener('click', (event) => {
				var parent = event.target;
				while(parent.nodeName !== 'A') {
					parent = parent.parentNode					
				}
				if(parent.getAttribute('navigate')!=null) {
					parent.getAttribute('navigate')
				}
			});
		});
    }

    render = () => {
        return (
            <div className="sidebar">
					<div className="user-panel mt-3 pb-3 mb-3 d-flex">
						<div className="image">
							<img src={profilePic} className="img-circle elevation-2" alt="User Image"/>
						</div>
						<div className="info">
							<a href="#" className="d-block">Admin</a>
						</div>
					</div>
					<nav className="mt-2">
						<ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
							<ListItem name="Home" styleClass="nav-link" iconStyle="fas fa-home" isTreeView='false' hyperlink="#"/>
							<NavHeader styleClass="nav-header" name="My Workspace" />
							<ListItem name="Calendar" styleClass="nav-link" iconStyle="fas fa-calendar-alt" isTreeView='false' hyperlink="#"/>
							<ListItem name="Mailbox" styleClass="nav-link" iconStyle="far fa-envelope" isTreeView='true' >
								<List>
									<ListItem name="Inbox" styleClass="nav-link" iconStyle="fas fa-inbox" isTreeView='false' hyperlink="#"/>
									<ListItem name="Compose" styleClass="nav-link" iconStyle="fas fa-pen" isTreeView='false' hyperlink="#"/>
									<ListItem name="Read" styleClass="nav-link" iconStyle="fab fa-readme" isTreeView='false' hyperlink="#"/>
								</List>
							</ListItem>
							<ListItem name="Profile Setting" styleClass="nav-link" iconStyle="fas fa-book" isTreeView='true'>
								<List>
									<ListItem name="Profile" styleClass="nav-link" iconStyle="fas fa-user" isTreeView='false' hyperlink="./../pages/examples/profile.html"/>
									<ListItem name="Contacts" styleClass="nav-link" iconStyle="fas fa-id-card" isTreeView='false' hyperlink="./../pages/examples/contacts.html"/>
									<ListItem name="Recover Password" styleClass="nav-link" iconStyle="fas fa-key" isTreeView='false' hyperlink="./../pages/examples/recover-password.html"/>
									<ListItem name="Lockscreen" styleClass="nav-link" iconStyle="fas fa-lock" isTreeView='false' hyperlink="./../pages/examples/lockscreen.html"/>
								</List>
							</ListItem>
							<NavHeader styleClass="nav-header" name="Manage Orders" />
							<ListItem name="View All Orders" styleClass="nav-link" iconStyle="fas fa-binoculars" isTreeView='false' hyperlink="#"/>
							<ListItem name="Edit Orders" styleClass="nav-link" iconStyle="fas fa-edit" isTreeView='false' hyperlink="#"/>
							<ListItem name="Update tracking status" styleClass="nav-link" iconStyle="fas fa-map-marker-alt" isTreeView='false' hyperlink="#"/>
							<ListItem name="Billing" styleClass="nav-link" iconStyle="fas fa-file-invoice" isTreeView='true'>
								<List>
									<ListItem name="View All Bills" styleClass="nav-link" iconStyle="fas fa-file-invoice-dollar" isTreeView='false' hyperlink="#"/>
									<ListItem name="Create new bill" styleClass="nav-link navigatable" iconStyle="fas fa-receipt" isTreeView='false' hyperlink="#"/>
									<ListItem name="Edit bill" styleClass="nav-link" iconStyle="fas fa-file-alt" isTreeView='false' hyperlink="#"/>
								</List>
							</ListItem>
							<ListItem name="Manage Users" styleClass="nav-link" iconStyle="fas fa-users" isTreeView='true'>
								<List>
									<ListItem name="Create a user" styleClass="nav-link" iconStyle="fas fa-user-plus" isTreeView='false' hyperlink="#"/>
									<ListItem name="Manage user" styleClass="nav-link" iconStyle="fas fa-users-cog" isTreeView='false' hyperlink="#"/>
								</List>
							</ListItem>
						</ul>
					</nav>
				</div>
        )
    }
}

export default Sidebar