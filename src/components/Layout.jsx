import React from 'react';
import Header from './Header';
import '../styles/components/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
