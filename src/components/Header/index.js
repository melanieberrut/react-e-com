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
import MiniBasket from '../MiniBasket';
import content from '../../content';
import iconMenu from '../../images/icon-navicon.svg';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			isMobileNavOpened: false,
			isMiniBasketOpened: false
		};

		this.toggleHamburgerMenu = this.toggleHamburgerMenu.bind(this);
		this.toggleMiniBasket = this.toggleMiniBasket.bind(this);
	}

	toggleMiniBasket() {
		this.setState(prevState => ({
			isMiniBasketOpened: !prevState.isMiniBasketOpened
		}));
	}

	toggleHamburgerMenu() {
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
									<HeaderCartLink
										isMiniBasketOpened={this.state.isMiniBasketOpened}
										toggleMiniBasket={this.toggleMiniBasket}
									/>
									<div className="d-none d-sm-inline-block">
										<HeaderWishlistLink />
										<HeaderAccountLink />
									</div>
									<div className="d-inline-block d-lg-none">
										<a onClick={this.toggleHamburgerMenu} className="nav-btn btn btn-link ml-3">
											<img
												src={iconMenu}
												className="nav-btn__icon icon icon--header"
												alt={content.header.iconnav.menu}
												aria-label={content.header.iconnav.menu}
											/>
											<span className="sr-only">{content.header.iconnav.menu}</span>
										</a>
									</div>

									{this.state.isMiniBasketOpened && (
										<MiniBasket toggleMiniBasket={this.toggleMiniBasket} />
									)}
								</div>
							</div>
							<OffsideMainMenu
								isNavOpened={isNavOpened}
								toggleHamburgerMenu={this.toggleHamburgerMenu}
							/>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}
export default Header;
