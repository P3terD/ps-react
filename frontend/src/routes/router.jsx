import {createBrowserRouter} from "react-router-dom";
import {Navigate} from "react-router-dom";
import DefaultLayout from "../pages/layouts/DefaultLayout";
import Dashboard from "../pages/Private/Dashboard";
import Users from "../pages/Private/Users";
import Produtos from "../pages/Private/Produtos"
import GuestLayout from "../pages/layouts/GuestLayout";
import Login from "../pages/Public/Login";
import Signup from "../pages/Public/Signup";
import NotFound from "../pages/Public/NotFound";
import Category from "../pages/Private/Categorias";
import ProductIndex from "../pages/Public/ProductIndex";


const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />,
        abstract: true,
        title: 'Dashboard',
        description: 'Dashboard',
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/products',
        element: <Produtos />,
      },
      {
        path: '/categories',
        element: <Category />,
      }
    ]
  },
  {
    path: '/productIndex',
    element: <ProductIndex />,
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  }


]);

export default router;
