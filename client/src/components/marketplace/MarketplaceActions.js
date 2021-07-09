import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const MarketplaceActions = ({ getCurrentProfile, _id }) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	return (
		<div className='dash-buttons'>
			<Link to={`/profile/${_id}`} className='btn btn-light'>
				<i className='fas fa-user-circle text-primary'></i> My Profile
			</Link>
			<Link to='/edit-profile' className='btn btn-light'>
				<i className='fas fa-user-circle text-primary'></i> Edit Profile
			</Link>
			<Link to='/postform' className='btn btn-light'>
				<i className='fab fa-black-tie text-primary'></i> List an Item
			</Link>
		</div>
	);
};

MarketplaceActions.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
};

export default connect(null, { getCurrentProfile })(MarketplaceActions);
