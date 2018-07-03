import React, { Component } from 'react';
import HeaderSearchForm from '../HeaderSearchForm';

class HeaderSearch extends Component {
	render() {
		
		let isSearchOpened = this.props.isSearchOpened;

		return (
			<div className={ isSearchOpened ? 'header-search' : 'header-search d-none' }>
				<HeaderSearchForm cssModifier="one" />
			</div>
		);
	}
}

export default HeaderSearch;
