import React, { MouseEventHandler, useContext } from "react";
import ReactDOM from 'react-dom/client';
import '../styles/components/toggleTheme.scss'

// TODO

export const themes = {
    dark: 'dark',
    light: 'light',
}

export const ThemeContext = React.createContext({
    theme: themes.dark,
    setTheme: () => {},
  });
  ;

const getTheme = () => {
    const theme = `${window?.localStorage?.getItem('theme')}`;
    if (Object.values(themes).includes(theme))  return  theme;

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if  (userMedia.matches)  return  themes.dark;

    return themes.light;
}

export const ThemeProvider = ({children}: {children: React.ReactNode}) =>  {
    const [theme , setTheme]  =  React.useState(getTheme());
    React.useEffect(()  =>  {
        document.documentElement.className  =  theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    // return (
    //     <ThemeContext.Provider value={{theme, setTheme}}>
    //         {children}
    //     </ThemeContext.Provider>
    // )
}

export const Toggle = ({ value }: {value: boolean}) => {
    const { theme, setTheme } = useContext(ThemeContext);
  
    const handleToggle = () => {
      const newTheme = theme === themes.dark ? themes.light : themes.dark;
    //   setTheme(newTheme);
    };
  
    return (
      <label className="switch" htmlFor="toggler">
        <input
          id="toggler"
          type="checkbox"
          onClick={handleToggle} // Используйте handleToggle вместо onChange
          checked={theme === themes.dark} // Установите значение в соответствии с текущей темой
          readOnly
        />
        <span className="slider" />
        <span className="wave" />
      </label>
    );
}