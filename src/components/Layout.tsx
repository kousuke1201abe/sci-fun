import React from 'react';
import {FooterQuery} from './Footer';
import {NavbarQuery} from './Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => {
  return (
    <div style={{ maxWidth: '100%' }}>
      <NavbarQuery />
      <div>{children}</div>
      <FooterQuery />
    </div>
  );
};

export default TemplateWrapper;
