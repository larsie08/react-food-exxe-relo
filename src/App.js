import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Menu from './pages/Menu';
import Reserve from "./components/Reserve";
import MenuBurger from './components/MenuBurger';

export const AppContext = React.createContext();

function App() {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);

  return (
    <AppContext.Provider value={{ isOpenModal, isOpenBurger ,setIsOpenBurger, setIsOpenModal }}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="menu" element={<Menu />}></Route>
      </Routes>
      {isOpenModal && <Reserve />}
      {isOpenBurger && <MenuBurger />}
    </AppContext.Provider>
  );
}

export default App;
