import React from "react";
import logo from './../assets/img/AdminLTELogo.png'
import profilePic from './../assets/img/user2-160x160.jpg'
class Sidebar extends React.Component {

    render = () => {
        return (
            <div class="sidebar">
					<div class="user-panel mt-3 pb-3 mb-3 d-flex">
						<div class="image">
							<img src={profilePic} class="img-circle elevation-2" alt="User Image"/>
						</div>
						<div class="info">
							<a href="#" class="d-block">Admin</a>
						</div>
					</div>
					<nav class="mt-2">
						<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
							<li class="nav-item">
								<a href="./index.html" class="nav-link active">
									<i class="far fa-circle nav-icon"></i>
									<p>Home</p>
								</a>
							</li>
							<li class="nav-header">My Workspace</li>
							<li class="nav-item">
								<a href="./../pages/calendar.html" class="nav-link">
									<i class="nav-icon fas fa-calendar-alt"></i>
									<p>Calendar</p>
								</a>
							</li>
							<li class="nav-item has-treeview">
								<a href="#" class="nav-link">
									<i class="nav-icon far fa-envelope"></i>
									<p>
                    Mailbox<i class="fas fa-angle-left right"></i>
									</p>
								</a>
								<ul class="nav nav-treeview">
									<li class="nav-item">
										<a href="./../pages/mailbox/mailbox.html" class="nav-link">
											<i class="far fa-circle nav-icon"></i>
											<p>Inbox</p>
										</a>
									</li>
									<li class="nav-item">
										<a href="./../pages/mailbox/compose.html" class="nav-link">
											<i class="far fa-circle nav-icon"></i>
											<p>Compose</p>
										</a>
									</li>
									<li class="nav-item">
										<a href="./../pages/mailbox/read-mail.html" class="nav-link">
											<i class="far fa-circle nav-icon"></i>
											<p>Read</p>
										</a>
									</li>
								</ul>
							</li>
							<li class="nav-item has-treeview">
								<a href="#" class="nav-link">
									<i class="nav-icon fas fa-book"></i>
									<p>Invoice<i class="fas fa-angle-left right"></i>
									</p>
								</a>
								<ul class="nav nav-treeview">
									<li class="nav-item">
										<a href="./../pages/examples/invoice.html" class="nav-link">
											<i class="far fa-circle nav-icon"></i>
											<p>View Invoice</p>
										</a>
									</li>
									<li class="nav-item">
										<a href="./../pages/examples/invoice.html" class="nav-link">
											<i class="far fa-circle nav-icon"></i>
											<p>Create Invoice</p>
										</a>
									</li>
									
								</ul>
              </li>
              <li class="nav-item has-treeview">
								<a href="#" class="nav-link">
									<i class="nav-icon fas fa-book"></i>
									<p>Profile Setting<i class="fas fa-angle-left right"></i>
									</p>
								</a>
								<ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="./../pages/examples/profile.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Profile</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./../pages/examples/contacts.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Contacts</p>
                </a>
              </li>
							<li class="nav-item">
								<a href="./../pages/examples/login.html" class="nav-link">
									<i class="far fa-circle nav-icon"></i>
									<p>Login</p>
								</a>
							</li>
							<li class="nav-item">
								<a href="./../pages/examples/register.html" class="nav-link">
									<i class="far fa-circle nav-icon"></i>
									<p>Register</p>
								</a>
							</li>
							<li class="nav-item">
								<a href="./../pages/examples/forgot-password.html" class="nav-link">
									<i class="far fa-circle nav-icon"></i>
									<p>Forgot Password</p>
								</a>
							</li>
							<li class="nav-item">
								<a href="./../pages/examples/recover-password.html" class="nav-link">
									<i class="far fa-circle nav-icon"></i>
									<p>Recover Password</p>
								</a>
							</li>
							<li class="nav-item">
								<a href="./../pages/examples/lockscreen.html" class="nav-link">
									<i class="far fa-circle nav-icon"></i>
									<p>Lockscreen</p>
								</a>
              </li>
              </ul>
              </li>
						</ul>
					</nav>
				</div>
        )
    }
}

export default Sidebar