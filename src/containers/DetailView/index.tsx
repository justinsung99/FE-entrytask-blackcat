import React from 'react';

import Navbar from 'components/Navbar';
import ChannelBox from 'components/ChannelBox';
import faker from 'faker';
import './detailViewStyle.scss';

import { ReactComponent as ParticipantIcon } from 'assets/img/people-outline.svg';
import { ReactComponent as DetailIcon } from 'assets/img/info.svg';
import { ReactComponent as CommentIcon } from 'assets/img/comment.svg';
import { ReactComponent as DateFromIcon } from 'assets/img/date-from.svg';
import { ReactComponent as DateToIcon } from 'assets/img/date-to.svg';
import { ReactComponent as CheckOutlineIcon } from 'assets/img/check-outline.svg';
import { ReactComponent as LikeOutlineIcon } from 'assets/img/like-outline.svg';
import Gmap from 'assets/img/gmap.png';

import CommentSection from 'components/CommentSection';
import BottomWidget from 'components/BottomWidget';

// type DetailViewProps = {};

const DetailView: React.FC = () => {
  const tempPic = faker.internet.avatar();
  const detailsWrapClass = ['details-wrap', 'dpc-active'];
  const participantWrapClass = ['participant-wrap'];
  const commentWrapClass = ['comment-wrap'];
  const pictureList = [faker.image.image(), faker.image.image(), faker.image.image()];
  const goingThumbAvatarList = [
    faker.internet.avatar(),
    faker.internet.avatar(),
    faker.internet.avatar(),
    faker.internet.avatar(),
    faker.internet.avatar(),
    faker.internet.avatar(),
    faker.internet.avatar(),
  ];
  const likedThumbAvatarList = [
    faker.internet.avatar(),
    faker.internet.avatar(),
    faker.internet.avatar(),
    faker.internet.avatar(),
    faker.internet.avatar(),
    faker.internet.avatar(),
    faker.internet.avatar(),
  ];

  const renderPictures: any = [];
  pictureList.forEach((image, idx) => {
    renderPictures.push(
      <div className="sliding-picture" key={`${idx};${image}`}>
        <img src={image} alt={image} />
      </div>,
    );
  });

  const renderGoingAvatars: any = [];
  goingThumbAvatarList.forEach((avatar, idx) => {
    renderGoingAvatars.push(
      <div className="thumb-picture" key={`${idx};${avatar}`}>
        <img src={avatar} alt={avatar} />
      </div>,
    );
  });

  const renderLikedAvatars: any = [];
  likedThumbAvatarList.forEach((avatar, idx) => {
    renderLikedAvatars.push(
      <div className="thumb-picture" key={`${idx};${avatar}`}>
        <img src={avatar} alt={avatar} />
      </div>,
    );
  });
  return (
    <>
      <Navbar isRoot={false} />
      <div className="detail-view-wrap">
        <div className="title-section">
          <div className="channel-box-wrap">
            <ChannelBox channelName="Channel Name" />
          </div>
          <div className="title">
            <p className="title-text">Activity Title Name Make it Longer May Longer than One Line</p>
          </div>
          <div className="profile-section">
            <div className="profile-picture-container">
              <img src={tempPic} alt="temp-profile-pic" />
            </div>
            <div className="profile-detail-wrap">
              <p className="profile-detail-username">Username</p>
              <p className="last-publish">Published 2 days ago</p>
            </div>
          </div>
        </div>
        <div className="details-participant-comment-box">
          <div className={detailsWrapClass.join(' ')}>
            <DetailIcon />
            <div className="details-text">Details</div>
          </div>
          <div className={participantWrapClass.join(' ')}>
            <ParticipantIcon />
            <div className="participant-text">Participants</div>
          </div>
          <div className={commentWrapClass.join(' ')}>
            <CommentIcon />
            <div className="comment-text">Comments</div>
          </div>
        </div>

        <div className="detail-content">
          <div className="picture-slider">{renderPictures}</div>
          <div className="content-description">
            <div className="content-text">
              [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem
              urna et risus. Ut feugiat sapien mi potenti. Maecenas et enim odio. Nullam massa metus, varius quis
              vehicula sed, pharetra mollis erat. In quis viverra velit. Vivamus placerat, est nec hendrerit varius,
              enim dui hendrerit magna, ut pulvinar nibh lorem vel lacus. Mauris a orci iaculis, hendrerit eros sed,
              gravida leo. In dictum mauris vel augue varius there is south north asim
            </div>
            <div className="read-more-overlay">
              <div className="read-more-button">
                <p className="btn-label">VIEW ALL</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="off-left" />
        <div className="when-section">
          <div className="when-label">
            <div className="box"></div>
            <div>When</div>
          </div>
          <div className="split">
            <div className="left">
              <div className="row">
                <DateFromIcon />
                <p className="date-start">15 April 2015</p>
              </div>
              <div className="time-row">
                <div className="hour">8:30</div>
                <div className="am-pm">am</div>
              </div>
            </div>
            <div className="separator"></div>
            <div className="right">
              <div className="row">
                <DateToIcon />
                <p className="date-end">15 April 2015</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="off-left" />

        <div className="where-section">
          <div className="where-label">
            <div className="box"></div>
            <div>Where</div>
          </div>
          <div className="map-section">
            <p className="map-place-title">Marina Bay Sands</p>
            <p className="map-place-address">10 Bayfront Ave, S018956</p>
            <img src={Gmap} alt="google-map" className="map-img" />
          </div>
        </div>
        <div className="like-going-section">
          <div className="going-section">
            <div className="going-number-wrap">
              <CheckOutlineIcon />
              <div>34 going</div>
            </div>
            <div className="avatars-containers">{renderGoingAvatars}</div>
          </div>
          <hr className="off-left" />
          <div className="like-section">
            <div className="like-number-wrap">
              <LikeOutlineIcon />
              <div>7 likes</div>
            </div>
            <div className="avatars-containers">{renderLikedAvatars}</div>
          </div>
        </div>

        <div className="comment-section">
          <CommentSection />
        </div>
      </div>
      <BottomWidget />
    </>
  );
};

export default DetailView;
