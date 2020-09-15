import React, { useEffect, useState } from 'react';

import './listViewStyle.module.scss';
import Navbar from 'components/Navbar';
import Post from 'components/Post';
import Spinner from 'components/Spinner';
import InfiniteScroll from 'react-infinite-scroller';

import { fetchPostList } from './actions';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router';

type ListViewProps = {
  fetchPostList: () => any;
  fetchPostListResponse: Record<string, unknown>[];
  isLoading: boolean;
  isFetchPostListSuccess: boolean;
  history: any;
};

const ListView: React.FC<ListViewProps> = (props) => {
  const [postList, setPostList] = useState(props.fetchPostListResponse);

  useEffect(() => {
    props.fetchPostList();
  }, []);

  useEffect(() => {
    const tempList: Record<string, unknown>[] = [];
    if (postList.length > 1) {
      postList.forEach((post) => {
        tempList.push(post);
      });
    }
    props.fetchPostListResponse.forEach((post) => {
      tempList.push(post);
    });
    setPostList(tempList);
  }, [props.fetchPostListResponse]);

  const renderPost: any = [];
  if (postList.length > 1) {
    postList.forEach((post: any, index: number) => {
      renderPost.push(
        <div className="item-wrapper" key={`${index};${post.title};${post.username}`}>
          <Post
            id={post.id}
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
            onClick={() => props.history.push(`/details/${post.id}`)}
          />
        </div>,
      );
    });
  }
  return (
    <>
      <Navbar isRoot={true} />
      <div className="list-view-wrap">
        <InfiniteScroll initialLoad={false} loadMore={props.fetchPostList} hasMore={true} loader={<Spinner />}>
          {renderPost}
        </InfiniteScroll>
      </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListView));
