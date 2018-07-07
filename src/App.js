import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductsListing from './pages/ProductsListing';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NoMatch from './pages/NoMatch';
import Wishlist from './pages/Wishlist';
import MyAccount from './pages/MyAccount';
import PaymentPage from './pages/Payment';

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <div className="app-container">
            <Header />
            <div className="app-body clearfix">
              <div className="container">
                <div className="row no-gutters">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/products/:id" component={ProductDetails} />
                    <Route path="/plp" component={ProductsListing} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/wishlist" component={Wishlist} />
                    <Route path="/myaccount" component={MyAccount} />
                    <Route path="/payment" component={PaymentPage} />
                    <Route component={NoMatch} />
                  </Switch>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
