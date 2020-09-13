import React, { useState } from 'react';

import './postStyle.scss';
import ProfilePlaceholder from 'assets/img/dev-photo-placeholder.jpg';
import { ReactComponent as TimeIcon } from 'assets/img/time.svg';
import { ReactComponent as CheckIcon } from 'assets/img/check.svg';
import { ReactComponent as LikeIcon } from 'assets/img/like.svg';

export type PostProps = {
  username: string;
  channelName: string;
  avatar: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  postPic: string;
  description: string;
  likeCount: number;
  goingCount: number;
};

const Post: React.FC<PostProps> = (props) => {
  // const [description, setDesc] = useState(props.description);

  function formatParagraph(text: string) {
    const TEXT_LIMIT = 200;
    const tail = text.length < TEXT_LIMIT ? '' : '...';

    return text.substring(0, 201) + tail;
  }
  return (
    <div className="post-wrap">
      <div className="post-top-row">
        <div className="profile-wrap">
          <div className="profile-img-wrap">
            <img src={props.avatar ? props.avatar : ProfilePlaceholder} alt="profile-image" />
          </div>
          <p className="username">{props.username}</p>
        </div>
        <div className="channel-container">
          <div className="channel-name-btn">
            <p>{props.channelName}</p>
          </div>
        </div>
      </div>

      <div className="title-wrap">
        <div className="title-text">
          <p className="post-title">{props.title}</p>
          <div className="time-date-wrap">
            <div className="icon-wrap">
              <TimeIcon />
            </div>
            <div>
              {props.dateStart} - {props.dateEnd}
            </div>
          </div>
        </div>
        <div className="post-image-wrap">
          <img src={props.postPic ? props.postPic : ProfilePlaceholder} alt="post-title" />
        </div>
      </div>

      <div className="content">{formatParagraph(props.description)}</div>

      <div className="reaction-row">
        <div className="going-container">
          <div className="icon-wrap">
            <CheckIcon />
          </div>
          <div>I am going!</div>
        </div>

        <div className="like-container">
          <div className="icon-wrap">
            <LikeIcon />
          </div>
          <div>I like it</div>
        </div>
      </div>

      <hr className="post-bottom-line" />
    </div>
  );
};

export default Post;
