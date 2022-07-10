import React from "react";
import CardComp from "./Components/Card";
import DrawerComp from "./Components/DrawerComp";
import HeaderComp from "./Components/HeaderComp";

// const Sneakers = [
//   {
//     title: "Мужские Кроссовки Nike Kyrie 7",
//     price: 219,
//     imgUrl: "/img/sneakers/kyrie7.jpg"
//   },
//   {
//     title: "Мужские Кроссовки Nike Air Max 270",
//     price: 150,
//     imgUrl: "/img/sneakers/NikeAirMax270.jpg"
//   },
//   {
//     title: "Мужские Кроссовки Nike Lebron XVIII Low",
//     price: 166,
//     imgUrl: "/img/sneakers/Lebron8Low.jpg"
//   },
//   {
//     title: "Кроссовки Puma X Aka Boku Future Rider",
//     price: 86,
//     imgUrl: "/img/sneakers/PumaXAkaBokuFutureRider.png"
//   },
// ]

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpened, setIsOpened] = React.useState(false);
  React.useEffect(() => {
    fetch("https://62c811690f32635590d09782.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    })
  },[])

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj])
  }

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {isOpened ? <DrawerComp items={cartItems} onClickCart={()=> setIsOpened(!isOpened)} />:null}

      <HeaderComp onClickCart={()=> setIsOpened(!isOpened)}/>
      
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: "Все короссовки"}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input onChange={onChangeSearchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {items.
          filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <CardComp 
            key = {index}
            title = {item.title} 
            price = {item.price}
            imgUrl = {item.imgUrl}
            onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;
