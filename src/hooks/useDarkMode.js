import { useState } from 'react';

const UseDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useState(initialValue);


    return [darkMode, setDarkMode];
}

export default UseDarkMode;