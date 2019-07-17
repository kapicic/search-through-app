import React, { FC } from 'react'
import BE from '../../style/elements';
import LoginForm from '../LoginForm/LoginForm';
import userActions from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import LoginFormWrapperProps from '../../models/props/LoginFormWrapperProps';

const LoginFormWrapper: FC<LoginFormWrapperProps> = ({ requestUserValidation }) => {
	const handleSubmit = ( data: any ) => requestUserValidation( {...data} );

	return (
		<BE.Container>
			<LoginForm onSubmit={handleSubmit} />
		</BE.Container>
	)
}

const mapDispatch = { ...userActions };

export default connect(null, mapDispatch)(LoginFormWrapper);
