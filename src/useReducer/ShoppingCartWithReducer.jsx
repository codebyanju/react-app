import { useReducer } from "react";

const products = [
  {
    id: 1,
    name: "React Course",
    price: "20",
  },
  { id: 2, name: "Vue Course", price: "10" },
  { id: 3, name: "JavaScript Course", price: "30" },
  { id: 4, name: "System Design Course", price: "50" },
];

const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart": {
      const product = action.payload;

      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });

        return {
          ...state,
          cart: updatedCart,
        };
      }

      // New item
      return {
        ...state,

        cart: [
          ...state.cart,
          {
            ...product,
            quantity: 1,
          },
        ],
      };
    }

    default:
      return state;
  }
};

export const ShoppingCartWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { cart } = state;

  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalAmount = cart.reduce((totalAmount, item) => {
    return totalAmount + Number(item.price) * Number(item.quantity);
  }, 0);

  const addToCart = (product) => {
    return dispatch({ type: "add_to_cart", payload: product });
  };

  return (
    <div>
      {/* <ProductCard
        name="Product without props"
        price="10.99"
        addToCart={addToCart}
      /> */}
      {products.map((product) => {
        // Get Quantity
        const element = cart.find((item) => item.id === product.id);
        const quantity = element?.quantity || 0;

        return (
          <ProductCardWithProps
            key={product.id}
            productDetails={product}
            quantity={quantity}
            addToCart={() => addToCart(product)}
            className="shopping-cart"
          />
        );
      })}
      <p> Total Items: {totalItems}</p>
      <p> Total Amount: ${totalAmount}</p>
    </div>
  );
};

export const ProductCardWithProps = (props) => {
  // OR export const ProductCardWithProps = ({productDetails, addToCart, quantity }) => {
  const { name, price } = props.productDetails;
  const { addToCart, quantity } = props;

  return (
    <div className="shopping-cart">
      <p>{name}</p>
      <p>${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

// export const ProductCard = ({ name, price, quantity, addToCart }) => {
//   return (
//     <div className="shopping-cart">
//       <p>{name}</p>
//       <p>{price}</p>
//       <p>{quantity}</p>
//       <button onClick={addToCart}>Add to Cart</button>
//     </div>
//   );
// };
