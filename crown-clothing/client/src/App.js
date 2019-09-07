import React, { useEffect, lazy, Suspense }  from 'react';
import Header from './components/header/header.component'

import { Route, Switch, Redirect } from 'react-router-dom';
import { GlobalStyle } from './global.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUsersSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUsersSession, currentUser }) => {

  useEffect(() => {
    checkUsersSession();
  }, [checkUsersSession])

  
  return (
    <div>
          <GlobalStyle/>
          <Header/>
          <Switch>
            <Suspense fallback={<div>...Loading</div>} >
              <Route exact path='/' component={ HomePage } />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/signin' 
                render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} 
              />
              <Route exact path='/checkout' component={CheckoutPage} />
            </Suspense>
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
