import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
