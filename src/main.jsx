import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Todo from "./Apps/Todo";
import {
  SimpleCounter,
  ShoppingCartComponentSharing,
  SimpleCounterWithReducer,
  ShoppingCartWithReducer,
} from "./useReducer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
