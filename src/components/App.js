import React, { useState } from 'react';
import './index.css'; // Import your CSS file for styles

import ShoppingList from './ShoppingList';
import { items } from '../data/items';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Dark mode toggle button */}
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      
      {/* Shopping list component */}
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
