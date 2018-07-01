import React, { Component } from 'react';
import iconSearch from '../../images/icon-search.svg';

class HeaderSearchForm extends Component {
	render() {
		return (
			<form className={`form-inline search-form my-2 my-lg-0 ` + this.props.cssModifier}>
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Search..." />
					<div className="input-group-append">
						<button type="button" className="btn btn btn-outline-secondary">
							<img
								src={iconSearch}
								className="search-form__icon icon icon--search"
								alt="search"
								aria-label="search"
							/>
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default HeaderSearchForm;
