import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import Router from '../../router/Route';

const Layout = () => {
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname === '/' ||
    location.pathname === '/login' ||
    location.pathname === '/signup';

  return (
    <>
      {!hideNavAndFooter && <Nav />}
      <Router />
      {!hideNavAndFooter && <Footer />}
    </>
  );
};

export default Layout;
