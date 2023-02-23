import React from "react";
import {
  Route,
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
  <div>
    <Modal/>
    <Switch>
      {user ? (
        <Fragment>
          <header>
            <HeaderNav/>
            <SideNav/>
          </header>
          {/* News Feed Component */}
          <ProtectedRoute exact path='/newsfeed' component={NewsfeedContainer}/> 
          <ProtectedRoute exact path='/profile/:userId' component={UserProfile} />
          <ProtectedRoute exact path='/github' component={() => { 
            window.location.href = 'https://github.com/kenthiroi'; 
            return null;
          }}/>
          <ProtectedRoute exact path='/linkedin' component={() => { 
            window.location.href = 'https://www.linkedin.com/in/kent-hiroi-381880103/'; 
            return null;
          }}/>
        </Fragment>
      ) : (
        <AuthRoute exact path="/" component={LoginPageContainer}/>
      )}
    </Switch>
  </div>
);

export default ComponentRoutes;