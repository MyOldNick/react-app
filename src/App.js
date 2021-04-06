//React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Posts from "./pages/Posts/Posts";
import PostPage from './pages/PostPage/PostPage'
//style
import "./app.css"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Posts}/>
        <Route path="/post/:id" component={PostPage}/>
      </Switch>
    </Router>
  );
};

export default App;
