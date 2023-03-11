import React from "react";
import PropTypes from 'prop-types';
import {
  Route,
  Routes,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginPageContainer from '../login/loginPageContainer';
import Modal from '../modal/modal';
import NewsfeedContainer from '../newsfeed/newsfeedContainer';
import HeaderNav from '../header/header'
import UserProfile from '../user/profile';
import SideNav from '../header/sideNav';

const ComponentRoutes = ({ user }) => (
  <>
    <Modal/>
      {user ? (
        <>
          <header>
            <HeaderNav/>
            <SideNav/>
          </header>
          <Routes>
            <Route exact path='/newsfeed' component={NewsfeedContainer}/> 
            <Route exact path='/profile/:userId' component={UserProfile} />
            {/* <Route exact path='/github' component={() => { 
              window.location.href = 'https://github.com/kenthiroi'; 
              return null;
            }}/>
            <Route exact path='/linkedin' component={() => { 
              window.location.href = 'https://www.linkedin.com/in/kent-hiroi-381880103/'; 
              return null;
            }}/> */}
          </Routes>
        </>
      ) : (
        <LoginPageContainer/>
      )}
  </>
);

ComponentRoutes.propTypes = {
  user: PropTypes.object,
}

export default ComponentRoutes;