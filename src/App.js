import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Menu from './pages/Menu';
import Reserve from "./components/Reserve";

export const AppContext = React.createContext();

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AppContext.Provider value={{ isOpen, setIsOpen }}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="menu" element={<Menu />}></Route>
      </Routes>
      {isOpen && <Reserve />}
    </AppContext.Provider>
  );
}

export default App;
