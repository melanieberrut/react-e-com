import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./App";

const SiteRouting = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/pdp" component={ProductDetailsPage} />
      <Route path="/plp" component={ProductsListingPage} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

const ProductDetailsPage = () => (
  <div>
    <h2>PDP</h2>
  </div>
);
const ProductsListingPage = () => (
  <div>
    <h2>PLP</h2>
  </div>
);
const NoMatch = () => (
  <div>
    <h2>404</h2>
  </div>
);

export default SiteRouting;