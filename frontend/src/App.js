import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import 'antd/dist/antd.css'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import Context from './context/Context'
import AuthRoute from './util/AuthRoute'
import UserRoute from './util/UserRoute'
import HomeRoute from './util/HomeRoute'
import FacebookAuthRoute from './util/FacebookAuthRoute'

// Importing Pages & Components
import login from './pages/login';
import register from './pages/register';
import map from './pages/map'

import RegisterFacebook from './pages/registerFacebook';
import LandingPage from './pages/landingPage';
import Grid from './pages/grid';
import SinglePost from './pages/detailPost';
import Nearby from './pages/nearby';
import MutedPosts from './pages/mutedPosts'
import SubscribePosts from './pages/subscribePosts'
import Profile from './pages/Profile'
import Visited from './pages/Visited'

function App() {
  return (
    <Context>
      <Router>
        <Grid>
          <Switch>
            <HomeRoute exact path="/" component={LandingPage} />
            <AuthRoute exact path="/login" component={login} />
            <AuthRoute exact path="/register" component={register} />
            <UserRoute exact path="/post/:id" component={SinglePost} />
            <UserRoute exact path="/nearby" component={Nearby} />
            <UserRoute exact path="/mutedPost" component={MutedPosts} />
            <UserRoute exact path="/subscribePosts" component={SubscribePosts} />
            <UserRoute exact path="/profile" component={Profile} />
            <UserRoute exact path="/visited" component={Visited} />
            <FacebookAuthRoute exact path="/register/facebook" component={RegisterFacebook} />
            <UserRoute exact path="/map" component={map} />
          </Switch>
        </Grid>
      </Router>
    </Context>
  );
}

export default App;
