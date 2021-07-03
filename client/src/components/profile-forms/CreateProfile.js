import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = ({ createProfile, history }) => {
	const [formData, setFormData] = useState({
		location: '',
		email: '',
		phone: '',
		preferredContact: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: '',
	});

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		createProfile(formData, history);
	};

	const [displaySocialInputs, toggleSocialInputs] = useState(false);

	const {
		location,
		email,
		phone,
		preferredContact,
		bio,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram,
	} = formData;

	return (
		<Fragment>
			<h1 className='large text-primary'>Create Your Profile</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Let's get some information to make your
				profile stand out
			</p>
			<small>* = required field</small>
			<form className='form'>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Location'
						name='location'
						value={location}
						onChange={(e) => onChange(e)}
					/>
					<small className='form-text'>
						City & state suggested (eg. Boston, MA)
					</small>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Email'
						name='email'
						value={email}
						onChange={(e) => onChange(e)}
					/>
					<small className='form-text'>
						The email address you prefer to be contacted at
					</small>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Phone #'
						name='phone'
						value={phone}
						onChange={(e) => onChange(e)}
					/>
					<small className='form-text'>
						Optional, fill in if you wish to be contacted via phone call or text
						message
					</small>
				</div>
				<div className='form-group'>
					<select
						name='preferredContact'
						value={preferredContact}
						onChange={(e) => onChange(e)}>
						<option value='0'>Preferred Method of Contact</option>
						<option value='Email'>email</option>
						<option value='Phone Call'>Phone Call</option>
						<option value='Text Message'>Text Message</option>
						<option value='Message In Site'>Message In Site</option>
					</select>
					<small className='form-text'>Please choose one</small>
				</div>

				<div className='form-group'>
					<textarea
						placeholder='A short bio of yourself'
						name='bio'
						value={bio}></textarea>
					<small className='form-text'>
						Tell us a little about yourself. Totally optional
					</small>
				</div>

				<div className='my-2'>
					<button
						onClick={() => toggleSocialInputs(!displaySocialInputs)}
						type='button'
						className='btn btn-light'>
						Add Social Network Links
					</button>
					<span>Optional</span>
				</div>

				{displaySocialInputs && (
					<Fragment>
						<div className='form-group social-input'>
							<i className='fab fa-twitter fa-2x'></i>
							<input
								type='text'
								placeholder='Twitter URL'
								name='twitter'
								value={twitter}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-facebook fa-2x'></i>
							<input
								type='text'
								placeholder='Facebook URL'
								name='facebook'
								value={facebook}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-youtube fa-2x'></i>
							<input
								type='text'
								placeholder='YouTube URL'
								name='youtube'
								value={youtube}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-linkedin fa-2x'></i>
							<input
								type='text'
								placeholder='Linkedin URL'
								name='linkedin'
								value={linkedin}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-instagram fa-2x'></i>
							<input
								type='text'
								placeholder='Instagram URL'
								name='instagram'
								value={instagram}
								onChange={(e) => onChange(e)}
							/>
						</div>
					</Fragment>
				)}

				<input type='submit' className='btn btn-primary my-1' />
				<a className='btn btn-light my-1' href='dashboard.html'>
					Go Back
				</a>
			</form>
		</Fragment>
	);
};

CreateProfile.propTypes = {};

export default CreateProfile;
