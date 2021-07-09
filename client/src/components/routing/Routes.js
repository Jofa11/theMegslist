import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Marketplace from '../marketplace/Marketplace';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import PostForm from '../posts/PostForm';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
	return (
		<section className='container'>
			<Alert />
			<Switch>
				<Route exact path='/register' component={Register} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/profile/:id' component={Profile} />
				<PrivateRoute exact path='/posts' component={Posts} />
				<PrivateRoute exact path='/marketplace' component={Marketplace} />
				<PrivateRoute exact path='/create-profile' component={CreateProfile} />
				<PrivateRoute exact path='/edit-profile' component={EditProfile} />
				<PrivateRoute exact path='/postform' component={PostForm} />
				<Route component={NotFound} />
			</Switch>
		</section>
	);
};

export default Routes;