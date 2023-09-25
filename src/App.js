import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Dish from "./pages/Dish";
import EmptyPage from "./pages/EmptyPage";

import Sidebar from "./components/Sidebar";
import Reserve from "./components/Reserve";
import MenuBurger from "./components/MenuBurger";

export const AppContext = React.createContext();

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // setIsLoading(true);
    async function fetchData() {
      try {
        const itemsResponse = await axios.get(
          `https://64c180cafa35860baea09f01.mockapi.io/items?page=${currentPage}&limit=4`
        );
        const cartResponse = await axios.get(
          "https://64c180cafa35860baea09f01.mockapi.io/cartItems"
        );

        setItems(itemsResponse.data);
        setCartItems(cartResponse.data);
        // setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе данных ;(");
        console.error(error);
      }
    }

    fetchData();
    window.scrollTo(0, 0);
  }, [currentPage]);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.parentId)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.parentId))
        );
        await axios.delete(
          `https://64c180cafa35860baea09f01.mockapi.io/cartItems/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://64c180cafa35860baea09f01.mockapi.io/cartItems",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (Number(item.parentId) === Number(data.parentId)) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Не удалось добавить в корзину");
      console.error(error);
    }
  };

  const itemIsAdded = (id) => {
    return cartItems.some((item) => Number(item.parentId) === Number(id));
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isOpenModal || isOpenBurger ? "hidden" : "auto";

    if (isDarkTheme) {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", isDarkTheme);
    } else {
      body.setAttribute("data-theme", "ligth");
      localStorage.setItem("theme", isDarkTheme);
    }
  }, [isOpenModal, isOpenBurger, isDarkTheme]);

  return (
    <AppContext.Provider
      value={{
        isOpenModal,
        isOpenBurger,
        setIsOpenBurger,
        setIsOpenModal,
        cartItems,
        setCartItems,
        items,
        categoryId,
        setCategoryId,
        itemIsAdded,
        onAddToCart,
        setCurrentPage,
        setIsDarkTheme,
        isDarkTheme,
        isLoading,
        setIsLoading,
      }}
    >
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/dish/:id" element={<Dish />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>

      <Reserve />
      <MenuBurger />
    </AppContext.Provider>
  );
}

export default App;
