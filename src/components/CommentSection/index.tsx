import React from 'react';

import './commentSectionStyle.scss';
import faker from 'faker';
import Chat from 'components/Chat';

const CommentSection: React.FC = () => {
  const commentLogJSON = [
    {
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      message: faker.lorem.sentences(),
      dateSend: '9 hours ago',
    },
    {
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      message: faker.lorem.sentences(),
      dateSend: '9 hours ago',
    },
    {
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      message: faker.lorem.sentences(),
      dateSend: '9 hours ago',
    },
    {
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      message: faker.lorem.sentences(),
      dateSend: '9 hours ago',
    },
    {
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      message: faker.lorem.sentences(),
      dateSend: '9 hours ago',
    },
  ];

  const renderComments: any = [];
  commentLogJSON.forEach((comment, idx) => {
    renderComments.push(
      <div className="comment-wrap" key={`${idx};${comment}`}>
        <Chat
          username={comment.username}
          avatar={comment.avatar}
          message={comment.message}
          dateSend={comment.dateSend}
        />
      </div>,
    );
  });
  return <div className="comment-section-wrap">{renderComments}</div>;
};

export default CommentSection;
