import React, { FC } from 'react'
import Banner from '../components/Banner/Banner';
import UsersList from '../components/UsersList/UsersList';

const Home: FC<any> = () => {
	return (
		<>
			<Banner />
			<UsersList />
		</>
	)
}

export default Home;
