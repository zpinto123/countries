import React from "react";
import { Route } from "react-router-dom";
import { App, Countries } from "./pages";

const routes = () => [
  <Route key="root" path="/" exact component={App} />,
  <Route key="countries" path="/countries/:code?" component={Countries} />
];

export default routes;
