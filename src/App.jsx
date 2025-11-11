import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import ThemeToggle from './components/ThemeToggle/ThemeToggle'; // ✅ Add this import

const App = () => {
  return (
    <>
      <Sidebar />
      <Main />
      <ThemeToggle /> {/* ✅ Add this line */}
    </>
  );
};

export default App;
