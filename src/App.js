import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductsListing from './pages/ProductsListing';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Wishlist from './pages/Wishlist';

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <div className="app-container">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pdp" component={ProductDetails} />
              <Route path="/plp" component={ProductsListing} />
              <Route path="/product/:id" name="product" component={ProductDetails} />
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/cart" component={Cart} />
              <Route path="/login" component={Login} />
              <Route path="/wishlist" component={Wishlist} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
