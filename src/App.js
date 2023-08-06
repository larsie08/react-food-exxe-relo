import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Menu from './pages/Menu';
import Reserve from './components/Reserve';
import MenuBurger from './components/MenuBurger';
import Dish from './pages/Dish';

export const AppContext = React.createContext();

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get('https://64c180cafa35860baea09f01.mockapi.io/items');
        const cartResponse = await axios.get('https://64c180cafa35860baea09f01.mockapi.io/cartItems');

        setItems(itemsResponse.data);
        setCartItems(cartResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error();
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://64c180cafa35860baea09f01.mockapi.io/cartItems/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        await axios.post('https://64c180cafa35860baea09f01.mockapi.io/cartItems', obj);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
      console.error();
    }
  };

  const itemIsAdded = (id) => {
    return cartItems.some((item) => Number(item.parentId) === Number(id));
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isOpenModal || isOpenBurger ? 'hidden' : 'auto';
  }, [isOpenModal, isOpenBurger]);

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
      }}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/dish/:id" element={<Dish />} />
      </Routes>

      <Reserve />
      <MenuBurger />
    </AppContext.Provider>
  );
}

export default App;
