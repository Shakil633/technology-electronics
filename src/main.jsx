import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Banner from "./components/Banner/Banner";
import AuthProvider from "./Provider/AuthProvider";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import AddProduct from "./components/AddProduct/AddProduct";
import MyCart from "./components/MyCart/MyCart";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import AddBrandName from "./components/AddBrandName/AddBrandName";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import BrandDetails from "./components/BrandDetails/BrandDetails";
import Update from "./components/Update/Update";
import Error from "./components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-beige.vercel.app/brands"
          ),
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://technology-and-electronics-server-beige.vercel.app/brands/${params.id}`
          ),
      },
      {
        path: "/add",
        element: (
          <PrivetRoute>
            <AddProduct></AddProduct>
          </PrivetRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivetRoute>
            <MyCart></MyCart>
          </PrivetRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <BrandDetails></BrandDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://technology-and-electronics-server-beige.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <Update></Update>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://technology-and-electronics-server-beige.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/addBrandName",
        element: <AddBrandName></AddBrandName>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
