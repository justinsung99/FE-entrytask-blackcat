import React, { useState } from 'react';

import './navbarStyle.scss';

import { ReactComponent as Logo } from 'assets/img/logo-cat.svg';
import { ReactComponent as SearchIcon } from 'assets/img/search.svg';
import { ReactComponent as Placeholder } from 'assets/img/user.svg';
import { ReactComponent as Home } from 'assets/img/home.svg';

import SideBar from 'components/SideBar';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';

type NavbarProps = {
  isRoot: boolean;
  // history: any;
};

const Navbar: React.FC<NavbarProps & RouteComponentProps> = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  function openMenu() {
    setIsOpened(!isOpened);
  }
  console.log(isOpened);

  const sideBar = <SideBar isOpened={isOpened} closeMenu={openMenu} />;
  return (
    <div className="navbar-wrap">
      {props.isRoot ? (
        <>
          {sideBar}
          <a className="search-btn" onClick={openMenu}>
            <SearchIcon />
          </a>
        </>
      ) : (
        <>
          <a className="search-btn" onClick={() => props.history.push('/')}>
            <Home />
          </a>
        </>
      )}
      <a className="logo-btn">
        <Logo />
      </a>
      <a className="profile-btn">
        <Placeholder />
      </a>
    </div>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    push: (url: string) => dispatch(push(url)),
  };
}

export default withRouter(connect(null, mapDispatchToProps)(Navbar));
