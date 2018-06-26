import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserSignUp from '../../components/users/sign_up';
import UserConfirmation from '../../components/users/confirmation';

export default () => (
	<div>
		<Switch>
			<Route exact path="/" component={UserSignUp} />
            <Route exact path="/users/sign_up" component={UserSignUp} />
            <Route exact path="/users/:id/confirmation" component={UserConfirmation} />
		</Switch>
	</div>
);


