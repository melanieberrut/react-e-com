import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
	render() {
		return (
			<div className="app-footer">
				<footer className="footer pt-4 my-md-5 pt-md-5 border-top">
					<div className="container">
						<div className="row align-items-center">
							<nav className="col-12 col-lg-4 ">
								<ul className="navbar-nav nav">
									<li className="nav-item">
										<h5>Useful links</h5>
									</li>
									<li className="nav-item">
										<NavLink to="/contact-us" className="nav-link">
											Contact Us
										</NavLink>
									</li>
								</ul>
							</nav>
							<div className="col-12 col-lg-8 copyright">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. &copy; 2018
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
export default Footer;
