import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import ErrorComponent from './components/ErrorComponent';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';

// Lazy import
const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/restaurants/:resId', //3241 or//425
        element: <RestaurantMenu />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading!...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
