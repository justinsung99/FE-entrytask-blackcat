import React from 'react';

import './postStyle.scss';
import ProfilePlaceholder from 'assets/img/dev-photo-placeholder.jpg';
import { ReactComponent as TimeIcon } from 'assets/img/time.svg';
import { ReactComponent as CheckIcon } from 'assets/img/check.svg';
import { ReactComponent as LikeIcon } from 'assets/img/like.svg';

const Post: React.FC = () => {
  return (
    <div className="post-wrap">
      <div className="post-top-row">
        <div className="profile-wrap">
          <div className="profile-img-wrap">
            <img src={ProfilePlaceholder} alt="profile-image" />
          </div>
          <p className="username">Username</p>
        </div>
        <div className="channel-container">
          <div className="channel-name-btn">
            <p>Channel Name</p>
          </div>
        </div>
      </div>

      <div className="title-wrap">
        <div className="title-text">
          <p className="post-title">Activity Title Name Make it Longer May Longer than One Line</p>
          <div className="time-date-wrap">
            <div className="icon-wrap">
              <TimeIcon />
            </div>
            <div>14 May 2016 12:22 - 14 May 2016 18:00</div>
          </div>
        </div>
        <div className="post-image-wrap">
          <img src={ProfilePlaceholder} alt="post-title" />
        </div>
      </div>

      <div className="content">
        [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et
        risus. Ut feugiat sapien mi potenti...
      </div>

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
