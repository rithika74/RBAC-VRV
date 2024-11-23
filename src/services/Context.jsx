import { createContext, useState, useEffect } from "react";

export const ContextDatas = createContext();

const Context = ({ children }) => {
  const [urlPath, setUrlPath] = useState(window.location.pathname ?? "/");
  const [mobileSide, setmobileSide] = useState(false);
  const [isLogedIn, setisLogedIn] = useState(
    Boolean(localStorage.getItem("userId"))
  );

  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || "");

  useEffect(() => {
    const handleStorageChange = () => {
      setisLogedIn(Boolean(localStorage.getItem("userId")));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <ContextDatas.Provider
      value={{
        mobileSide,
        setmobileSide,
        urlPath,
        setUrlPath,
        isLogedIn,
        setisLogedIn,
        setUserRole,
      }}
    >
      {children}
    </ContextDatas.Provider>
  );
};

export default Context;
