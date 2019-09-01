import React, { useEffect }  from 'react';
import './App.css';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUsersSession } from './redux/user/user.actions';


const App = ({ checkUsersSession, currentUser }) => {

  useEffect(() => {
    checkUsersSession();
  }, [checkUsersSession])

  
  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' 
            render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} 
          />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUsersSession: () => dispatch(checkUsersSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
