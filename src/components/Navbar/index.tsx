import React from 'react';

import './navbarStyle.scss';

import { ReactComponent as Logo } from 'assets/img/logo-cat.svg';
import { ReactComponent as SearchIcon } from 'assets/img/search.svg';
import { ReactComponent as Placeholder } from 'assets/img/people-outline.svg';

const Navbar: React.FC = () => {
  return (
    <div className="navbar-wrap">
      <a className="search-btn">
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
