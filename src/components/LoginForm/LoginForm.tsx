import React, { FC } from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm: FC<any> = (props: any) => {
	const { handleSubmit } = props;
	return <form onSubmit={handleSubmit}>
		<div>
			<label htmlFor="username">Username</label>
			<Field
				name="username"
				component="input"
				type="text"
				placeholder="Username"
			/>
		</div>
		<div>
			<label htmlFor="password">Password</label>
			<Field
				name="password"
				component="input"
				type="password"
				placeholder="Password"
			/>
		</div>
		<div>
			<button type="submit">
				Submit
			</button>
		</div>
	</form>
}

export default reduxForm({
	form: 'login'
})(LoginForm);
