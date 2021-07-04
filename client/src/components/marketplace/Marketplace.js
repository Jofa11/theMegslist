import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import MarketplaceActions from './MarketplaceActions';
import { getCurrentProfile } from '../../actions/profile';
import { Fragment } from 'react';

const Marketplace = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading },
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	return loading && profile === null ? (
		<Spinner />
	) : (
		<Fragment>
			<h1 className='large text-primary'>Marketplace</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Welcome {user && user.name}
			</p>
			{profile !== null ? (
				<Fragment>
					<MarketplaceActions />
				</Fragment>
			) : (
				<Fragment>
                    <p>You have not yet set up a profile, please add some info</p>
                    <Link to='create-profile' className='btn btn-primary my-1'>
                        Create Profile
                    </Link>
                </Fragment>
			)}
		</Fragment>
	);
};

Marketplace.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Marketplace);
