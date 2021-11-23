import React from 'react';
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



const App = () => (
  <div>
    {/* <header>
      <Link to="/" className="header-link">
        <h1>FotoBook</h1>
      </Link>
    </header> */}
    <Switch>
      {/* Login landing page */}
      <AuthRoute exact path="/" component={LoginPageContainer}/>
      {/* News Feed Component */}
      {/* <ProtectedRoute exact path="/" component={}/>  */}
    </Switch>
  </div>
);

export default App;
