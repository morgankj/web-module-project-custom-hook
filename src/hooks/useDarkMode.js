import { useState } from 'react';
import UseLocalStorage from './useLocalStorage';

const UseDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = UseLocalStorage("darkMode", initialValue);
    return [darkMode, setDarkMode];
}

export default UseDarkMode;