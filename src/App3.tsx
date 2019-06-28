import React, {FC} from 'react';

const App3: FC<any> = (props) => {
	return (
		<button onClick={() => props.fetchUsers()}>fetch</button>
	)
}

export default App3;
