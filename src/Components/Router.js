import React from "react";
import App from "../App";
import Posts from "../Components/Posts";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/post/:id" component={Posts}></Route>
    </Switch>
  </BrowserRouter>
);
export default Router;
