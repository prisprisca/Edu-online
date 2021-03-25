import React from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import UserLogin from "./components/UserLogin";
import UserSign from "./components/UserSign";
import PasswordReset from "./components/PasswordReset";
 import AddTutorial from "./components/AddPost"
 import PostList from './components/PostList'
 import Head from './components/Head'
 import Profile from './components/Profile'
 import UpdateProfile from './components/UpdateProfile'
 import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <PrivateRoute path='/profile' component={Profile}/>
           <PrivateRoute path='/updateprofile' component={UpdateProfile}/>
          <Route path="/login" component={UserLogin} />
          <Route path="/signup" component={UserSign} />
          <Route path="/passwordreset" component={PasswordReset} />
           <Route path="/tutorial" component={AddTutorial} /> 
           <Route path ="/postlist" component={PostList} />
           <Route path='/head' component={Head}/>
           
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
