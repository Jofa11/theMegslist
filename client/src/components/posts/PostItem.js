import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';

const PostItem = ({
	deletePost,
	auth,
	post: { _id, text, name, user, comments, date },
}) => (
	<div className='post bg-white p-1 my-1'>
		<div>
			<Link to={`/profile/${user}`}>
				<i className="fas fa-user fa-5x"></i>
				<h4>{name}</h4>
			</Link>
		</div>
		<div>
			<p className='my-1'>{text}</p>
			<p className='post-date'>
				Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
			</p>
			<Link to={`/posts/${_id}`} className='btn btn-primary'>
				Comment{' '}
				{comments.length > 0 && (
					<span className='comment-count'>{comments.length}</span>
				)}
			</Link>
			{!auth.loading && user === auth.user._id && (
				<button
					onClick={(e) => deletePost(_id)}
					type='button'
					className='btn btn-danger'>
					<i className='fas fa-times'></i>
				</button>
			)}
		</div>
	</div>
);

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { deletePost })(PostItem);
