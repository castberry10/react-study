import React from 'react';
import {connect} from 'react-redux';
import Sample from '../components/Sample';

import {getPost, getUsers} from '../modules/sample';

const {useEffect} = React;

const SampleContainer = ({
	getPost,
	getUsers,
	post,
	users,
	loadingPost,
	loadingUsers
}) => {
	// 클래스 형태 컴포넌트라면 componentDidMount
	useEffect(() => {
		getPost(1);
		getUsers(1);
	}, [getPost, getUsers]);
	return (
		<Sample 
			post={post}
			users={users}
			loadingUsers={loadingUsers}
			lodingPost = {loadingPost}
			
			/>
	);
};

export default connect(
	({sample, loading}) => ({
		post: sample.post,
		users: sample.users,
		loadingPost: loading['sample/GET_POST'],
		loadingUsers: loading['sample/GET_USERS']
	}),
	{
		getPost,
		getUsers
	}
)(SampleContainer);