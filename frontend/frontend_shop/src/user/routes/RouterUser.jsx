import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Authorization/login";
import Register from "../views/Authorization/register";

// Loadable wrapper
const Loadable = (Component) => (props) =>
(
  <Suspense fallback={<div>Đang tải...</div>}>
    <Component {...props} />
  </Suspense>
);

/* ****Pages Product***** */
const ProductsList = Loadable(lazy(() => import('../views/Product/Products')));
const ProductsDetail = Loadable(lazy(() => import('../views/Product/ProductsDetail')));

/* ****Pages Posts***** */
const PostsList = Loadable(lazy(() => import('../views/Posts/Posts-list')));
const PostsDetail = Loadable(lazy(() => import('../views/Posts/Posts-detail')));

const RouterUser = [
  {
    path: "/",
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },

      // Product routes
      { path: "/products", element: <ProductsList /> },
      { path: "/products/:slug", element: <ProductsDetail /> },

      // Posts routes
      { path: "/Posts/", element: <PostsList /> },
      { path: "/Posts/:slug", element: <PostsDetail /> },
    ],
  },
];

export default RouterUser;