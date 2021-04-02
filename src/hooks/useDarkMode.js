import { useState, useEffect } from 'react';

function useDarkMode() {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeLoaded: false,
  });

  useEffect(() => {
    // check if preference is stored in local storage
    const preferenceInLS = localStorage.getItem('dark');
    let userPrefersDark;

    // if it is stored in LS, check if it's set
    if (preferenceInLS) {
      userPrefersDark = localStorage.getItem('dark') === 'true';
    } else {
      // if it's not set to dark in LS i.e. a new user, check their media preferences
      userPrefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches === true;
    }

    setThemeState({
      dark: userPrefersDark,
      hasThemeLoaded: true,
    });
  }, []);

  return [themeState, setThemeState];
}

export default useDarkMode;
