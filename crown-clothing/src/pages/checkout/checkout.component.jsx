import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './checkout.styles.scss';

import { selectCartItems } from '../../redux/cart/cart.selectors'; 

const CheckoutPage = () => (

  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
    </div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Description</span>
      </div>
    </div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Quantity</span>
      </div>
    </div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Price</span>
      </div>
    </div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {/* <div className="checkout-header">
      <div className="header-block">
      </div>
    </div> */}
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default CheckoutPage;