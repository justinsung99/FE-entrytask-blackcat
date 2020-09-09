import React, { useState, useEffect } from 'react';

import './loginViewStyle.scss';
import { ReactComponent as Logo } from 'assets/img/logo-cat.svg';
import { ReactComponent as UsernameIcon } from 'assets/img/user.svg';
import { ReactComponent as PasswordIcon } from 'assets/img/password.svg';
import { login, clearLogin } from './actions';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

type LoginViewProps = {
  login: (data: any) => any;
  clearLogin: () => any;
  // isLoading: any;
  isLoginSuccess: any;
  loginResponse: any;
  history: any;
};

const LoginView: React.FC<LoginViewProps> = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocus, setIsUsernameFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  function handleLogin(event: any) {
    event.preventDefault();

    // if (checkValid()) {
    props.login({
      username: username,
      password: password,
    });
    // }
  }

  function handleChange(e: any) {
    const target = e.target;

    switch (target.name) {
      case 'username':
        setUsername(target.value);
        break;

      case 'password':
        setPassword(target.value);
        break;
    }

    // fieldValidation(target);
  }

  // function fieldValidation(target: any) {
  //   const field = target.name;
  //   const value = target.value;

  //   switch (field) {
  //     case 'username':
  //       isUsernameFieldValid(value);
  //       break;
  //     case 'password':
  //       isPwdFieldValid(value);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // function isUsernameFieldValid(value: string): Boolean {
  //   let isValid = true;
  //   let initialState = '';

  //   if (!value) {
  //     isValid = false;
  //     initialState = 'Username cannot be empty';
  //   } else if (value.length < 6) {
  //     initialState = 'Username minimal 6 character';
  //   } else {
  //     initialState = '';
  //   }
  //   setUsernameWarning(initialState);

  //   return isValid;
  // }

  // function isPwdFieldValid(value: string): Boolean {
  //   let isValid = true;
  //   let initialState = '';

  //   if (!value) {
  //     isValid = false;
  //     initialState = 'Password cannot be empty';
  //   } else if (value.length < 8) {
  //     initialState = 'Password minimal 8 character';
  //   } else {
  //     initialState = '';
  //   }

  //   setPassWarning(initialState);

  //   return isValid;
  // }

  // function checkValid() {
  //   return isUsernameFieldValid(username) && isPwdFieldValid(password) === true;
  // }

  useEffect(() => {
    if (props.isLoginSuccess) {
      props.clearLogin();
      localStorage.setItem('blackCat', JSON.stringify(props.loginResponse));
      props.history.push('/');
    }
  });

  return (
    <form onSubmit={handleLogin}>
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
          <div className={isUsernameFocus ? 'username-input-wrap active' : 'username-input-wrap'}>
            <UsernameIcon />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              onFocus={() => setIsUsernameFocus(true)}
              onBlur={() => setIsUsernameFocus(false)}
            />
          </div>
          <div className={isPasswordFocus ? 'password-input-wrap active' : 'password-input-wrap'}>
            <PasswordIcon />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onFocus={() => setIsPasswordFocus(true)}
              onBlur={() => setIsPasswordFocus(false)}
            />
          </div>
        </div>
        <div className="sign-in-section">
          <input className="sign-in-btn" type="submit" value="SIGN IN" id="submit" onClick={handleLogin} />
        </div>
      </div>
    </form>
  );
};

function mapStateToProps(state: any) {
  return {
    loginResponse: state.loginViewReducer.get('loginResponse'),
    isLoginSuccess: state.loginViewReducer.get('isLoginSuccess'),
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    login: (data: any) => dispatch(login(data)),
    push: (url: string) => dispatch(push(url)),
    clearLogin: () => dispatch(clearLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
