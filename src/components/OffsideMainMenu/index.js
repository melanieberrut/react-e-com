import React, { Component } from 'react';
import iconClose from '../../images/icon-close.svg';
import HeaderSearchForm from '../HeaderSearchForm';
import HeaderCartLink from '../HeaderCartLink';
import HeaderWishlistLink from '../HeaderWishlistLink';
import HeaderAccountLink from '../HeaderAccountLink';
import NavigationList from '../NavigationList';

class OffsideMainMenu extends Component {
	generateParentClass() {
		let isNavOpened = this.props.isNavOpened;
		return isNavOpened
			? `offscreen-menu trans_400 offscreen-menu--visible`
			: `offscreen-menu trans_400`;
	}

	render() {
		return (
			<div className={this.generateParentClass()}>
				<div className="container">
					<div className="row">
						<div className="col col-sm-2 col-md-3 col-lg-3" />
					</div>
					<div className="row justify-content-end">
						<div className="text-right" onClick={() => this.props.handleClickCloseMenu()}>
							<img
								src={iconClose}
								className="offscreen-menu__btn offscreen-menu__btn--close"
								alt="close menu"
								aria-label="close menu"
							/>
						</div>
					</div>
					<div className="row">
						<HeaderCartLink />
						<HeaderWishlistLink />
						<HeaderAccountLink />

						<div className="mt-2 mb-2">
							<HeaderSearchForm />
						</div>

						<div className="col-12">
							<NavigationList modifierParentClass="text-left" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default OffsideMainMenu;
