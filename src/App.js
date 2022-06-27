import CardComp from "./Components/CardComp";
import DrawerComp from "./Components/DrawerComp";
import HeaderComp from "./Components/HeaderComp";

function App() {
  return (
    <div className="wrapper clear">
      <DrawerComp />

      <HeaderComp />
      
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..." />
          </div>
        </div>

          <div className="d-flex">
          <CardComp />
          
          </div>

        </div>

    </div>
  );
}

export default App;
