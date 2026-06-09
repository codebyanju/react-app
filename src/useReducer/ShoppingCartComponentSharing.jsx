import { useState } from "react";

export const ShoppingCartComponentSharing = () => {
  const [cartItems, setCartItems] = useState({
    reactCourse: 0,
    vueCourse: 0,
  });

  const prices = {
    react: 39.99,
    vue: 19.99,
  };

  const handleAddReactCourse = () => {
    setCartItems({ ...cartItems, reactCourse: cartItems.reactCourse + 1 });
  };

  const handleAddVueCourse = () => {
    setCartItems({ ...cartItems, vueCourse: cartItems.vueCourse + 1 });
  };

  return (
    <>
      <ProductCard
        name="React Course"
        price={prices.react}
        quantity={cartItems.reactCourse}
        addToCart={handleAddReactCourse}
      />
      <ProductCard
        name="Vue Course"
        price={prices.vue}
        quantity={cartItems.vueCourse}
        addToCart={handleAddVueCourse}
      />
      <CartSummary cartItems={cartItems} prices={prices} />
    </>
  );
};

export const ProductCard = ({ name, price, quantity, addToCart }) => {
  return (
    <>
      <div>
        <p> {name}</p>
        <p> ${price}</p>
        <p>Quantity {quantity}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </>
  );
};

export const CartSummary = ({ cartItems, prices }) => {
  const totalItems = cartItems.reactCourse + cartItems.vueCourse;
  const totalPrice =
    cartItems.reactCourse * prices.react + cartItems.vueCourse * prices.vue;
  return (
    <>
      <div>
        <h2> Cart Details</h2>
        <p>Total Items {totalItems} </p>
        <p>Total Price ${totalPrice.toFixed(2)}</p>
      </div>
    </>
  );
};
