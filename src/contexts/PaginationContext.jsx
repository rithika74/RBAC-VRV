// PaginationContext.js
import React, { createContext, useState } from 'react';

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [pages, setPages] = useState({
    page: 1,
    limit: 5,
  });

  const updatePage = (newPage) => {
    setPages({ ...pages, page: newPage });
  };

  return (
    <PaginationContext.Provider value={{ pages, updatePage }}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;
