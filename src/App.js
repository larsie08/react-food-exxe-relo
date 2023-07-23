import React from "react";
import { Routes, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Menu from "./pages/Menu";
import Reserve from "./components/Reserve";
import MenuBurger from "./components/MenuBurger";

export const AppContext = React.createContext();

function App() {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);

  return (
    <AppContext.Provider
      value={{ isOpenModal, isOpenBurger, setIsOpenBurger, setIsOpenModal }}
    >
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
      <CSSTransition
        in={isOpenModal}
        classNames="reserve"
        timeout={300}
        unmountOnExit
      >
        <Reserve />
      </CSSTransition>
      <CSSTransition
        in={isOpenBurger}
        classNames="burger"
        timeout={300}
        unmountOnExit
      >
        <MenuBurger />
      </CSSTransition>
    </AppContext.Provider>
  );
}

export default App;
