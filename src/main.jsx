import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import Todo from "./Apps/Todo";
import Error from "./Error";
import {
  SimpleCounter,
  ShoppingCartComponentSharing,
  SimpleCounterWithReducer,
  ShoppingCartWithReducer,
} from "./useReducer";
import RestaurantContainer from "./RestaurantApp/RestaurantContainer";
import AboutUs from "./RestaurantApp/AboutUs";
import ContactUs from "./RestaurantApp/ContactUs";
import RestaurantHome from "./RestaurantApp/RestaurantHome";
import Cart from "./RestaurantApp/Cart";
import RestaurantMenu from "./RestaurantApp/RestaurantMenu";

// Lazy loading
// on demand loading
// chunking
// code splitting
// dynamic bundling
// dynamic import
const Grocery = lazy(() => import("./Grocery"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ShoppingCartWithReducer />,
      },
      {
        path: "/counter",
        element: <SimpleCounter />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/counter-reducer",
        element: <SimpleCounter />,
      },
      {
        path: "/cart",
        element: <ShoppingCartComponentSharing />,
      },
      {
        path: "/cart-reducer",
        element: <ShoppingCartWithReducer />,
      },
      {
        path: "/counter-reducer",
        element: <SimpleCounterWithReducer />,
      },
      {
        path: "/cart-reducer",
        element: <ShoppingCartWithReducer />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/res",
        element: <RestaurantContainer />,
        children: [
          { index: true, element: <RestaurantHome /> },
          {
            path: "about",
            element: <AboutUs />,
          },
          {
            path: "contact",
            element: <ContactUs />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: ":resId",
            element: <RestaurantMenu />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
