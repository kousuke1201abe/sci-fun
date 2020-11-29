import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => {
  return (
    <div style={{ maxWidth: '100%' }}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
