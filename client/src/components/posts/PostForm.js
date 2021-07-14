import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
	const [text, setText] = useState('');

	return (
		<div className='post-form'>
			
			
			<Link to='/marketplace' className='btn'>
				Back to Marketplace
			</Link>
			<div className='bg-primary p'>
				<h3>Post an item or service to the marketplace.</h3>
			</div>
			<form
				className='form my-1'
				onSubmit={(e) => {
					e.preventDefault();
					addPost({ text });
					setText('');
				}}>
				<textarea
					name='text'
					cols='30'
					rows='5'
					placeholder='List an item or service'
					value={text}
					onChange={(e) => setText(e.target.value)}
					required></textarea>
				<input type='submit' className='btn btn-dark my-1' value='Submit' />
			</form>
		</div>
	);
};

PostForm.propTypes = {
	addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
