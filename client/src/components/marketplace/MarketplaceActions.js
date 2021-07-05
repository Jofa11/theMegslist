import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MarketplaceActions = ({ _id }) => {

	return (
		<div className='dash-buttons'>
			<Link to={`/profile/${_id}`} className='btn btn-light'>
				<i className='fas fa-user-circle text-primary'></i> My Profile
			</Link>
			<Link to='/edit-profile' className='btn btn-light'>
				<i className='fas fa-user-circle text-primary'></i> Edit Profile
			</Link>
			<Link to='/add-item' className='btn btn-light'>
				<i className='fab fa-black-tie text-primary'></i> List an Item
			</Link>
		</div>
	);
};

MarketplaceActions.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default MarketplaceActions;
