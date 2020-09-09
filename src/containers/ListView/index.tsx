import React from 'react';

import './listViewStyle.module.scss';
import Navbar from 'components/Navbar';
import Post from 'components/Post';

const ListView: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="list-view-wrap">
        <div className="item-wrapper">
          <Post />
        </div>
        <div className="item-wrapper">
          <Post />
        </div>
      </div>
    </>
  );
};

export default ListView;
