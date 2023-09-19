import React, { Fragment } from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import LoginPageContainer from './login/loginPageContainer';
import Modal from './modal/modal';
import NewsfeedContainer from './newsfeed/newsfeedContainer';
import HeaderNav from './header/header'
import UserProfile from './user/profile';
import SideNav from './header/sideNav';
import ErrorMsg from './error/errorMsg';
import ScrollToTop from './scrollToTop';


const App = (props) => (
  <div>
    <Modal/>
    <Switch>
      <AuthRoute exact path="/" component={LoginPageContainer}/>
      <Fragment>
        <ScrollToTop />
        <header>
          <HeaderNav/>
          <SideNav/>
          <ErrorMsg/>
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
      {/* Login landing page */}
    </Switch>
  </div>
);

// const App = () => (
//   <div>
//     <Routes>
//       <Route path="/*" element={<ComponentRoutesContainer/>} />
//     </Routes>
//   </div>
// )

export default App;
