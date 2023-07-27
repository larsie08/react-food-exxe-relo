import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Menu from './pages/Menu';
import Reserve from './components/Reserve';
import MenuBurger from './components/MenuBurger';

export const AppContext = React.createContext();

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isOpenModal || isOpenBurger ? 'hidden' : 'auto';
  }, [isOpenModal, isOpenBurger])

  return (
    <AppContext.Provider value={{ isOpenModal, isOpenBurger, setIsOpenBurger, setIsOpenModal }}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
      </Routes>

      <Reserve />
      <MenuBurger />
    </AppContext.Provider>
  );
}

export default App;
