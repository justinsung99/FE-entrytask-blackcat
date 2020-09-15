import React from 'react';

import './bottomWidgetStyle.scss';
import { ReactComponent as CommentSingleIcon } from 'assets/img/comment-single.svg';
import { ReactComponent as LikeOutlineIcon } from 'assets/img/like-outline.svg';
import { ReactComponent as CheckOutlineIcon } from 'assets/img/check-outline.svg';

const BottomWidget: React.FC = () => {
  return (
    <div className="bottom-widget-wrap">
      <div className="comment-widget-btn widget">
        <CommentSingleIcon />
      </div>
      <div className="like-widget-btn widget">
        <LikeOutlineIcon />
      </div>
      <div className="join-widget-btn widget">
        <CheckOutlineIcon />
        <div>Join</div>
      </div>
    </div>
  );
};

export default BottomWidget;
