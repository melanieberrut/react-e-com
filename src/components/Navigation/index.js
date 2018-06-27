import React, { Component } from 'react';
import NavigationList from '../NavigationList';

class Navigation extends Component {
	constructor() {
		super();
		this.state = {
			isMobileNavOpened: false,
			isSearchOpened: false,
		};
	}

	render() {
		let isNavOpened = this.state.isMobileNavOpened;

		return (

			<div className="container">
				<div className="row position-relative justify-content-end">
					<nav className="navbar navbar-lightest navbar--main navbar-expand-lg col-12 col-lg-12">

						<div id="navbarNav" 
							className={
								isNavOpened
									? `navbar-collapse collapse show mt-2 mb-2`
									: `navbar-collapse collapse`
							}>
							<NavigationList modifierParentClass="nav-fill" />
						</div>

					</nav>
				</div>
			</div>

		);
	}
}

export default Navigation;