import { createContext, useEffect, useState } from "react";

export const ContextDatas = createContext();

const Context = ({ children }) => {
  const [urlPath, setUrlPath] = useState(window.location.pathname ?? "/");
  const [mobileSide, setmobileSide] = useState(false);
  const [isLogedIn, setisLogedIn] = useState(localStorage.getItem("token") ? true : false )

  return (
    <ContextDatas.Provider
      value={{
        mobileSide,
        setmobileSide,
        urlPath,
        isLogedIn,
        setUrlPath,
      }}
    >
      {children}
    </ContextDatas.Provider>
  );
};

export default Context;
