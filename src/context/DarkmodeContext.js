import { useContext, createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();
export const useDarkModeContext = () => useContext(DarkModeContext);

export const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false);
    // console.log(darkMode);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);    
    };

    useEffect(() => {
        // console.log(darkMode);

        if(darkMode) {
            document.body.classList.add('bg-dark', 'text-white');
        } else {
            document.body.classList.remove('bg-dark', 'text-white');
        }
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    );
};