import axios from 'axios';
import { setAlert } from './alert';

import {
	CLEAR_PROFILE,
	GET_PROFILE,
	PROFILE_ERROR,
	ACCOUNT_DELETED,
} from './types';

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/profile/me');

		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		dispatch({ type: CLEAR_PROFILE });

		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Get profile by id
export const getProfileById = (userId) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/profile/user/${userId}`);

		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Create or update profile
export const createProfile =
	(formData, history, edit = false) =>
	async (dispatch) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const res = await axios.post('/api/profile', formData, config);

			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			});

			dispatch(
				setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success')
			);

			if (!edit) {
				history.push('/marketplace');
			}
		} catch (err) {
			const errors = err.response.data.errors;

			if (errors) {
				errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
			}

			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: err.response.statusText,
					status: err.response.status,
				},
			});
		}
	};

// Delete account & profile
export const deleteAccount = (id) => async (dispatch) => {
	if (window.confirm('Are you sure? This can NOT be undone!')) {
		try {
			await axios.delete('/api/profile');

			dispatch({ type: CLEAR_PROFILE });
			dispatch({ type: ACCOUNT_DELETED });

			dispatch(setAlert('Your account has been deleted'));
		} catch (err) {
			dispatch({
				type: PROFILE_ERROR,
				payload: { msg: err.response.statusText, status: err.response.status },
			});
		}
	}
};
