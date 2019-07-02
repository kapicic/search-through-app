import React, { useState, FC } from 'react'
import { connect } from 'react-redux';
import SearchProps from '../../models/props/SearchProps';
import searchActions from '../../redux/actions/searchActions';

import SS from './SearchStyle'; // SS = search style

const Search: FC<SearchProps> = (props) => {
	const [searchTerm, setSearchTerm] = useState('');
	let searchDelay: number;

	const handleSearch = (searchTermValue: string): void => {
		clearTimeout(searchDelay);
		searchDelay = setTimeout(() => {
			setSearchTerm(searchTermValue.trim());
		}, 500);
	}

	const handleSubmit = (event: any): void => {
		event.preventDefault();
		if (searchTerm === '') return;
		props.requestSearchUsers(searchTerm);
	}

	return (
		<SS.SearchForm onSubmit={handleSubmit}>
			<label htmlFor="search">
				<SS.SearchInput onChange={(event => handleSearch(event.target.value))} type="text" name="search" id="search" placeholder="Search through app here..." />
			</label>
			<SS.SearchSubmit type="submit" />
		</SS.SearchForm>
	)
};

const mapDispatch = { ...searchActions }

export default connect(null, mapDispatch)(Search);
