import React from 'react';
import './AppHeader.css';

const AppHeader = ({ title }) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>
    </header>
  );
};

export default AppHeader;
