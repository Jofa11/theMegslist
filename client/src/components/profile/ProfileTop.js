import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
	profile: {
		location,
		email,
		phone,
		preferredContact,
		social,
		user: { name },
	},
}) => {
	return (
		<div className='profile-top bg-primary p-2'>
			<h1 className='large'>{name}</h1>
			<p>{location && <span>{location}</span>}</p>
			<p>{phone && <span>{phone}</span>}</p>
			<p>{preferredContact && <span>{preferredContact}</span>}</p>
			<div className='icons my-1'>
				{email && (
					<a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
						<i className='fas fa-globe fa-2x'></i>
					</a>
				)}
				{social && social.twitter && (
					<a href={social.twitter} target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-twitter fa-2x'></i>
					</a>
				)}
				{social && social.facebook && (
					<a href={social.facebook} target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-facebook fa-2x'></i>
					</a>
				)}
				{social && social.linkedin && (
					<a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-linkedin fa-2x'></i>
					</a>
				)}
				{social && social.youtube && (
					<a href={social.youtube} target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-youtube fa-2x'></i>
					</a>
				)}
				{social && social.instagram && (
					<a href={social.instagram} target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-instagram fa-2x'></i>
					</a>
				)}
			</div>
		</div>
	);
};

ProfileTop.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileTop;
