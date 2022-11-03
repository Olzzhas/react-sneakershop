import React from "react";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import DrawerComp from "./Components/Drawer/";
import HeaderComp from "./Components/HeaderComp";
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpened, setIsOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://62c811690f32635590d09782.mockapi.io/cart'), 
          axios.get('https://62c811690f32635590d09782.mockapi.io/favorites'),
          axios.get('https://62c811690f32635590d09782.mockapi.io/items')
        ]);
          
        // const cartResponse = await axios.get('https://62c811690f32635590d09782.mockapi.io/cart')
        // const favoritesResponse = await axios.get('https://62c811690f32635590d09782.mockapi.io/favorites')
        // const itemsResponse = await axios.get('https://62c811690f32635590d09782.mockapi.io/items')

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('error')
      }
    }
    fetchData();
  },[])

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item)=> Number(item.parentId) === Number(obj.id));
      if(findItem){
        setCartItems(prev => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`https://62c811690f32635590d09782.mockapi.io/cart/${findItem.id}`)
      } else {
        setCartItems((prev)=>[...prev, obj])
        const { data } = await axios.post('https://62c811690f32635590d09782.mockapi.io/cart', obj)
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId){
            return{
              ...item,
              id: data.id
            }
          }
          return item;
        }))
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину!")
    }
  }

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://62c811690f32635590d09782.mockapi.io/cart/${id}`)
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))
    } catch (error) {
      alert('Ошибка при удалении из корзины :(')
      console.error(error)
    }
  }

  const onChangeSearchValue = (event) => {
  setSearchValue(event.target.value);
  }

  const onAddToFavorite = async (obj) => {
    try{
      if(favorites.find((favObj) => Number(favObj.id) === Number(obj.id))){
        axios.delete(`https://62c811690f32635590d09782.mockapi.io/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      }else{
        const { data } = await axios.post('https://62c811690f32635590d09782.mockapi.io/favorites', obj)
        setFavorites((prev)=>[...prev, data])
      }
    }catch (error){
      alert('Error')
    }
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider value = {{
      items, 
      cartItems, 
      favorites, 
      isItemAdded,
      onAddToFavorite, 
      setIsOpened, 
      setCartItems, 
      cartItems, 
      onAddToFavorite, 
      onAddToCart, 
      isLoading
    }}>
      <div className="wrapper clear">
        <div>
          <DrawerComp onClose={() => setIsOpened(false)} onRemove={onRemoveItem} items={cartItems} onClickCart={()=> setIsOpened(!isOpened)} />
        </div>

        <DrawerComp onClose={() => setIsOpened(false)} onRemove={onRemoveItem} items={cartItems} onClickCart={()=> setIsOpened(!isOpened)} opened={isOpened} />

      <HeaderComp onClickCart={()=> setIsOpened(!isOpened)}/>

      <Routes>
        <Route exact path="/" element={
          <Home 
            items={items}
            cartItems = {cartItems}
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
            onChangeSearchValue = {onChangeSearchValue}
            onAddToFavorite = {onAddToFavorite}
            onAddToCart = {onAddToCart}
            isLoading = {isLoading}
          />}>
        </Route>

        <Route exact path="/favorites" element={
            <Favorites />
          }>
        </Route>

        <Route exact path="/orders" element={
            <Orders />
          }>
        </Route>
        
      </Routes>

    </div>
    </AppContext.Provider>
  );
}

export default App;
