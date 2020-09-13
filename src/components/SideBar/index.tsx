import React, { useRef, useEffect, createRef, useState } from 'react';
import './sideBarStyle.scss';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { ReactComponent as SearchIcon } from 'assets/img/search.svg';

type SideBarProps = {
  isOpened: boolean;
  closeMenu: () => void;
};

const SideBar: React.FC<SideBarProps> = (props) => {
  const menuClass = ['side-menu'];
  const shadowClass = ['shadow'];
  const [channels, setChannels] = useState([
    'All',
    'Channel 3',
    'Channel 4',
    'Channel 1',
    'Channel 2',
    'Short',
    'Short',
    'Channel 3',
    'Channel 4',
    'Channel 5',
    'Channel Long Name',
    'Channel 6',
  ]);
  if (props.isOpened) {
    menuClass.push('open');
    shadowClass.push('open');
  }

  const renderChannels: any = [];

  channels.forEach((channel, index) => {
    renderChannels.push(
      <div className="channel" key={`${index};${channel}`}>
        {channel}
      </div>,
    );
  });

  return (
    <div className="side-bar-wrap">
      <div className={menuClass.join(' ')}>
        <div className="side-bar-top">
          <div className="menu-label">
            <span>DATE</span>
          </div>
          <div className="time-tag-container">
            <div className="time-label">ANYTIME</div>
            <div className="time-label">TODAY</div>
            <div className="time-label">TOMMORROW</div>
            <div className="time-label">THIS WEEK</div>
            <div className="time-label">THIS MONTH</div>
            <div className="time-label">LATER</div>
          </div>

          <div className="menu-label">
            <span>CHANNEL</span>
          </div>

          <div className="channel-tag-container">{renderChannels}</div>
        </div>
        <div className="search-btn">
          <div className="search-logo">
            <SearchIcon />
          </div>
          <div className="label">SEARCH</div>
        </div>
      </div>

      <div className={shadowClass.join(' ')} onClick={props.closeMenu}>
        {''}
      </div>
    </div>
  );
};

export default connect(null, null)(SideBar);
