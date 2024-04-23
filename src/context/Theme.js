"use client";

import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
    //True means dark; False means light
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(!theme);
        console.log("Theme toggled: ", theme);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div>{children}</div>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;