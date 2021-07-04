import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({
	auth: { isAuthenticated, loading },
	profile: {
		user: { _id },
	},
	logout,
}) => {
	const authLinks = (
		<ul>
			<li>
				<Link to='/marketplace'>Marketplace</Link>
			</li>
			<li>
				<Link to='#'>Post Stuff</Link>
			</li>
			<li>
				<Link to={`/profile/${_id}`}>
					<i className='fas fa-user' />{' '}
					<span className='hide-sm'>My Profile</span>
				</Link>
			</li>
			<li>
				<a onClick={logout} href='#!'>
					<i className='fas fa-sign-out-alt' />{' '}
					<span className='hide-sm'>Logout</span>
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<Link to='/profiles'>Marketplace</Link>
			</li>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</ul>
	);

	return (
		<nav className='navbar bg-dark'>
			<h1>
				<Link to='/'>
					<i className='fas fa-fish'></i> The MegsList
				</Link>
			</h1>
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
	user: state.user,
});

export default connect(mapStateToProps, { logout })(Navbar);
