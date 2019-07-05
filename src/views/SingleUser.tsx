import React, { FC } from 'react'
import User from '../components/User/User';

const SingleUser: FC<any> = (props) => {
	return (
		<>
			<User {...props} /> 
		</>
	)
}

export default SingleUser;
