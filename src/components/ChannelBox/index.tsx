import React from 'react';
import './channelBoxStyle.scss';

type ChannelBoxProps = {
  channelName: string;
};

const ChannelBox: React.FC<ChannelBoxProps> = (props) => {
  return (
    <div className="channel-container">
      <div className="channel-name-btn">
        <div className="channel-text">{props.channelName}</div>
      </div>
    </div>
  );
};

export default ChannelBox;
