import React, { useState,  useEffect } from "react";

export const ThemeContext = React.createContext({
    dark: false,
    toggle: () => { }
});

export default function ThemeProvider({ children }) {

    const [dark, setDark] = useState(false);
    useEffect(() => {
        // Media Hook to check what theme user prefers
        applyTheme();
        // if state changes, repaints the app
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dark]);

    // rewrites set of css variablels/colors
    const applyTheme = () => {
        let theme;
        if (dark) {
            theme = darkTheme;
        }
        if (!dark) {
            theme = lightTheme;
        }

        const root = document.getElementsByTagName("html")[0];
        root.style.cssText = theme.join(";");
    };

    const toggle = () => {
        // A smooth transition on theme switch
        const body = document.getElementsByTagName("body")[0];
        body.style.cssText = "transition: background .5s ease";

        setDark(!dark);
    };

    return (
        <ThemeContext.Provider
            value={{
                dark,
                toggle
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

// styles
const lightTheme = [
    "--bg-color: var(--bg-light)",
    "--text-color: var(--text-light)",
    "--bg-element:var(--color-white)"

];

const darkTheme = [
    "--bg-color: var(--bg-dark)",
    "--text-color: var(--color-white)",
    "--bg-element:var(--elements-dark)"



];
