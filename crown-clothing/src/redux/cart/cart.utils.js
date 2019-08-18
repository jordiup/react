export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  ); 

  if (existingCartItem){
    return cartItems.map(cartItem => 
      cartItem.id == cartItemToAdd.id
      ? {... cartItem, quantity: cartItem.quantity + 1 }
      : cartItem  
    )

  }

  // quantity property of 1 is used when the item doesn't exist yet (first time added to cart)
  return [...cartItems, {...cartItemToAdd, quantity: 1}];
};