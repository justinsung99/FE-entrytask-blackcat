import React from 'react';

import './loginViewStyle.scss';
import {ReactComponent as Logo} from 'assets/img/logo-cat.svg';
import {ReactComponent as UsernameIcon} from 'assets/img/user.svg';
import {ReactComponent as PasswordIcon} from 'assets/img/password.svg';

const LoginView: React.FC = () => {
  return (
    <div className="login-view-wrap">
      <div className="title-section">
        <div className="top-section">
          <p className="subtitle">FIND THE MOST LOVED ACTIVITIES</p>
          <p className="title">BLACK CAT</p>
          <div className="logo-wrap">
            <Logo />
          </div>
        </div>
      </div>
      <div className="form-section">
        <div className="username-input-wrap">
          <UsernameIcon />
          <input type="text" name="username" placeholder="Username"/>
        </div>
        <div className="password-input-wrap">
        <PasswordIcon />
          <input type="password" name="password" placeholder="Password"/>
        </div>
      </div>
      <div className="sign-in-section">
        SIGN IN
      </div>
    </div>
  );
};

export default LoginView;
