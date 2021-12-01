import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import LoginPageContainer from './login/login_page_container';
import Modal from './modal/modal';
import NewsfeedContainer from './newsfeed/newsfeed_container';
import HeaderNav from './header/header'



const App = (props) => (
  <div>
    <Modal/>
    <Switch>
      <AuthRoute exact path="/" component={LoginPageContainer}/>
      <Fragment>
        <header>
          <HeaderNav/>
        </header>
        {/* News Feed Component */}
        <ProtectedRoute exact path="/newsfeed" component={NewsfeedContainer}/> 

      </Fragment>
      {/* Login landing page */}
    </Switch>
  </div>
);

export default App;
