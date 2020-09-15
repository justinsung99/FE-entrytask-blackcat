import React from 'react';

import './chatStyle.scss';
import { ReactComponent as ReplyIcon } from 'assets/img/reply.svg';

type ChatProps = {
  username: string;
  avatar: string;
  dateSend: string;
  message: string;
};

const Chat: React.FC<ChatProps> = (props) => {
  return (
    <div className="chat-container">
      <div className="chat-avatar-wrap">
        <img className="avatar-img" src={props.avatar} alt={props.avatar} />
      </div>
      <div className="body-name-wrap">
        <div className="name-row">
          <div className="name-date">
            <div className="name">{props.username}</div>
            <div className="date-ago">{props.dateSend}</div>
          </div>
        </div>
        <div className="message-wrap">
          <p className="message">{props.message}</p>
        </div>
      </div>
      <div className="reply-wrap">
        <ReplyIcon />
      </div>
    </div>
  );
};

export default Chat;
