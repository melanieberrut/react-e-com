import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class NavigationList extends Component {

	generateParentClass() {
		return this.props.modifierParentClass ? `navbar-nav nav nav-underline `+ this.props.modifierParentClass : `navbar-nav nav nav-underline`;
	}

	render() {

		return (

			<ul className={ this.generateParentClass() }>
				<li className="nav-item">
					<NavLink to="/products/6" className="nav-link">
						PDP
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/plp" className="nav-link">
						PLP
					</NavLink>
				</li>
			</ul>

		);
	}
}

NavigationList.propTypes = {
	modifierParentClass: PropTypes.string,
};

export default NavigationList;