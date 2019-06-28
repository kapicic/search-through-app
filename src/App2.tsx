import React, { FC } from 'react';
import { connect } from 'react-redux';
import userActions from './redux/actions/userActions';
import App3 from './App3';

const mapState = (state: any) => {
	return {
		users: state.users
	}
}

const mapDispatch = { fetch: userActions.fetchUsers };



const App2: FC<any> = (props) => {
	return (
		<div>
			<App3 fetchUsers={props.fetch} />
		</div>
	)
}

export default connect(mapState, mapDispatch)( App2 );
