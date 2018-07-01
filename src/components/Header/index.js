import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';
import './Header.css';
import Navigation from '../Navigation';
import HeaderCartLink from '../HeaderCartLink';
import HeaderWishlistLink from '../HeaderWishlistLink';
import HeaderAccountLink from '../HeaderAccountLink';
import HeaderSearchForm from '../HeaderSearchForm';
import OffsideMainMenu from '../OffsideMainMenu';

import iconMenu from '../../images/icon-navicon.svg';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			isMobileNavOpened: false
		};

		this.handleHamburgerButton = this.handleHamburgerButton.bind(this);
		this.handleClickCloseMenu = this.handleClickCloseMenu.bind(this);
	}

	handleHamburgerButton() {
		this.setState(prevState => ({
			isMobileNavOpened: !prevState.isMobileNavOpened
		}));
	}

	handleClickCloseMenu() {
		this.setState(prevState => ({
			isMobileNavOpened: !prevState.isMobileNavOpened
		}));
	}

	render() {
		let isNavOpened = this.state.isMobileNavOpened;

		return (
			<div className="app-header">
				<header>
					<nav className="header nav pt-6 pb-6">
						<div className="container">
							<div className="row no-gutters align-items-center">
								<div className="col-3 col-sm-3 col-lg-2 text-left">
									<Link to={'/'} className="navbar-brand btn btn-link">
										Ecom
									</Link>
								</div>
								<div className="d-none d-lg-flex col-lg-4">
									<Navigation />
								</div>
								<div className="col d-none d-lg-block col-lg-2">
									<HeaderSearchForm cssModifier="d-none d-lg-flex d-xl-flex" />
								</div>
								<div className="col-9 col-sm-9 col-lg-4 text-right">
									<HeaderCartLink />
									<div className="d-none d-sm-inline-block">
										<HeaderWishlistLink />
										<HeaderAccountLink />
									</div>
									<div className="d-inline-block d-lg-none">
										<a onClick={this.handleHamburgerButton} className="nav-btn btn btn-link ml-3">
											<img
												src={iconMenu}
												className="nav-btn__icon icon icon--header"
												alt="Menu"
												aria-label="Menu"
											/>
											<span className="sr-only">Menu</span>
										</a>
									</div>
								</div>
							</div>
							<OffsideMainMenu
								isNavOpened={isNavOpened}
								handleClickCloseMenu={this.handleClickCloseMenu}
							/>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}
export default Header;
