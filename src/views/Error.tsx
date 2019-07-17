import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import config from '../config';
import BE from '../style/elements'; // BE = basic elements

const Error: FC<any> = () => {
	return (
		<BE.Container>
			<br/>
			<p>Apparently this page does not exist. Take me <NavLink to={config.paths.home}>home</NavLink></p>
			<br/>
		</BE.Container>
	)
}

export default Error;
