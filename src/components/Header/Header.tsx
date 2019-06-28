import React from 'react';
import './Header.css';
import Logo from '../../assets/search-through-logo.png';

const Header: React.FC = () => {
	return (
		<header className="header">
			<img className="logo" src={Logo} alt="Search Through Site Branding"/>
			<div>Search Bar</div>
			<div>Login/out navigation link</div>
		</header>
	)
}

export default Header;
