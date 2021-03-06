import React from 'react';
import { Link } from 'react-router-dom';


const MarketplaceActions = ({ _id }) => {

	return (
		<div className='dash-buttons'>
			<Link to={`/profile/${_id}`} className='btn btn-light'>
				<i className='fas fa-user-circle text-primary'></i> My Profile
			</Link>
			<Link to='/edit-profile' className='btn btn-light'>
				<i className='fas fa-user-circle text-primary'></i> Edit Profile
			</Link>
			<Link to='/postform' className='btn btn-light'>
				<i className="fas fa-comment-dollar text-primary"></i> List an Item
			</Link>
		</div>
	);
};


export default MarketplaceActions;
