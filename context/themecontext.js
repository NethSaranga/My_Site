import { createContext, useContext, useEffect, useState } from "react";

const Theme = createContext();

const Context = ({ children }) => {

    const [theme, setTheme] = useState('dark')

    return (
        <Theme.Provider value={{ theme, setTheme}}>
          {children}
        </Theme.Provider>
      );
}
export const ThemeContext = () => {
    return useContext(Theme);
  };

export default Context;