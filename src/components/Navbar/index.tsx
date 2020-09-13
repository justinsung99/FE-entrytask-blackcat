import React, { useState } from 'react';

import './navbarStyle.scss';

import { ReactComponent as Logo } from 'assets/img/logo-cat.svg';
import { ReactComponent as SearchIcon } from 'assets/img/search.svg';
import { ReactComponent as Placeholder } from 'assets/img/people-outline.svg';

import SideBar from 'components/SideBar';

type NavbarProps = {};

const Navbar: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  function openMenu() {
    setIsOpened(!isOpened);
  }
  console.log(isOpened);

  const sideBar = <SideBar isOpened={isOpened} closeMenu={openMenu} />;
  return (
    <div className="navbar-wrap">
      {sideBar}
      <a className="search-btn" onClick={openMenu}>
        <SearchIcon />
      </a>
      <a className="logo-btn">
        <Logo />
      </a>
      <a className="profile-btn">
        <Placeholder />
      </a>
    </div>
  );
};

export default Navbar;
