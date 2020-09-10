import React, { useEffect, useState } from 'react';

import './listViewStyle.module.scss';
import Navbar from 'components/Navbar';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

import { fetchPostList } from './actions';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

type ListViewProps = {
  fetchPostList: () => any;
  fetchPostListResponse: any;
  isLoading: boolean;
  isFetchPostListSuccess: boolean;
};

const ListView: React.FC<ListViewProps> = (props) => {
  const [postList, setPostList] = useState({ data: [] });

  useEffect(() => {
    props.fetchPostList();
  }, []);

  useEffect(() => {
    setPostList(props.fetchPostListResponse);
  }, [props.fetchPostListResponse]);

  const renderPost: any = [];
  console.log(postList);
  if (postList) {
    console.log(postList.data);
    postList.data.forEach((post: any, index) => {
      renderPost.push(
        <div className="item-wrapper" key={`${index};${post.title};${post.username}`}>
          <Post
            username={post.user.username}
            channelName={post.user.channel_name}
            avatar={post.user.avatar}
            title={post.post_title}
            dateEnd={post.date_end}
            dateStart={post.date_start}
            postPic={post.post_pic}
            description={post.description}
            likeCount={post.like_count}
            goingCount={post.going_count}
          />
        </div>,
      );
    });
  }
  return (
    <>
      <Navbar />
      <div className="list-view-wrap">{props.isLoading ? <Spinner /> : renderPost}</div>
    </>
  );
};

function mapStateToProps(state: any) {
  return {
    fetchPostListResponse: state.listViewReducer.get('fetchPostListResponse'),
    isLoading: state.listViewReducer.get('isLoading'),
    isFetchPostListSuccess: state.listViewReducer.get('isFetchPostListSuccess'),
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchPostList: () => dispatch(fetchPostList()),
    push: (url: string) => dispatch(push(url)),
    // clearLogin: () => dispatch(clearLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
