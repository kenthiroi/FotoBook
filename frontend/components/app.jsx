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



const App = (props) => (
  <div>
    <Modal/>
    <Switch>
      {/* Login landing page */}
      <AuthRoute exact path="/" component={LoginPageContainer}/>
      {/* News Feed Component */}
      <Fragment>
        <header>
          <Link to="/" className="header-link">
            <h1>FotoBook</h1>
          </Link>
        </header>
        <ProtectedRoute exact path="/newsfeed" component={NewsfeedContainer}/> 

      </Fragment>
    </Switch>
  </div>
);

export default App;
