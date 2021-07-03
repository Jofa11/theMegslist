import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = props => {
    const [formData, setFormData] = useState({
        location: '',
        email: '',
        phone: '',
        preferredContact: '',
    })

    const {
        location,
        email,
        phone,
        preferredContact,
    } = formData;

    return (
			<Fragment>
				<h1 className='large text-primary'>Create Your Profile</h1>
				<p className='lead'>
					<i className='fas fa-user'></i> Let's get some information to make
					your profile stand out
				</p>
				<small>* = required field</small>
				<form className='form'>
					<div className='form-group'>
						<input type='text' placeholder='Location' name='location' />
						<small className='form-text'>
							City & state suggested (eg. Boston, MA)
						</small>
					</div>
					<div className='form-group'>
						<input type='text' placeholder='Email' name='email' />
						<small className='form-text'>
							The email address you prefer to be contacted at
						</small>
					</div>
					<div className='form-group'>
						<input type='text' placeholder='Phone #' name='phone' />
						<small className='form-text'>
							Optional, fill in if you wish to be contacted via phone call or text message
						</small>
					</div>
					<div className='form-group'>
						<select name='status'>
							<option value='0'>Preferred Method of Contact</option>
							<option value='Email'>email</option>
							<option value='Phone Call'>Phone Call</option>
							<option value='Text Message'>Text Message</option>
							<option value='Message In Site'>Message In Site</option>

						</select>
						<small className='form-text'>
							Please choose one
						</small>
					</div>

					<div className='form-group'>
						<textarea
							placeholder='A short bio of yourself'
							name='bio'></textarea>
						<small className='form-text'>Tell us a little about yourself. Totally optional</small>
					</div>

					<div className='my-2'>
						<button type='button' className='btn btn-light'>
							Add Social Network Links
						</button>
						<span>Optional</span>
					</div>

					<div className='form-group social-input'>
						<i className='fab fa-twitter fa-2x'></i>
						<input type='text' placeholder='Twitter URL' name='twitter' />
					</div>

					<div className='form-group social-input'>
						<i className='fab fa-facebook fa-2x'></i>
						<input type='text' placeholder='Facebook URL' name='facebook' />
					</div>

					<div className='form-group social-input'>
						<i className='fab fa-youtube fa-2x'></i>
						<input type='text' placeholder='YouTube URL' name='youtube' />
					</div>

					<div className='form-group social-input'>
						<i className='fab fa-linkedin fa-2x'></i>
						<input type='text' placeholder='Linkedin URL' name='linkedin' />
					</div>

					<div className='form-group social-input'>
						<i className='fab fa-instagram fa-2x'></i>
						<input type='text' placeholder='Instagram URL' name='instagram' />
					</div>
					<input type='submit' className='btn btn-primary my-1' />
					<a className='btn btn-light my-1' href='dashboard.html'>
						Go Back
					</a>
				</form>
			</Fragment>
		);
}

CreateProfile.propTypes = {

}

export default CreateProfile
