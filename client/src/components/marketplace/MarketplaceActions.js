import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
	return (
		<div className='dash-buttons'>
			<Link to='/edit-profile' className='btn btn-light'>
				<i className='fas fa-user-circle text-primary'></i> Edit Profile
			</Link>
			<Link to='/add-item' className='btn btn-light'>
				<i className='fab fa-black-tie text-primary'></i> List an Item
			</Link>
		</div>
	);
};

export default DashboardActions;
