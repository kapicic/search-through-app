import React, { FC } from 'react'
import LoginFormWrapper from '../components/LoginFormWrapper/LoginFormWrapper';

const Landing: FC<any> = (props) => {
	return (
		<>
			<LoginFormWrapper {...props} />
		</>
	)
}

export default Landing;
