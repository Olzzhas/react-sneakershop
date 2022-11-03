import React from 'react'
import CardComp from "../Components/Card";

function Home({
  items, 
  searchValue, 
  onChangeSearchValue, 
  onAddToCart, 
  onAddToFavorite, 
  cartItems, 
  isLoading
}) {

  const renderItems = () => {
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
        <CardComp 
        key = {index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}

        loading = {isLoading}
        {...item}
        />
      ))
  }

    return(
        <div className="content p-40">
          <div className='slider'>
            <img  src="/img/slider.png" alt="slider" />
          </div>
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: "Все короссовки"}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input onChange={onChangeSearchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {renderItems()}
        </div>

      </div>
    )
}

export default Home;