function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" />
            <div>
              <h3>OLZHAS SNEAKERS</h3>
              <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
          </div>

          <div>
            <ul className="d-flex">
              <li className="mr-30">
                <img width={18} height={12} src="/img/cart.svg" />
                <span>1049.00$</span>
              </li>
              
              <li>
              <img width={18} height={18} src="/img/user.png" />
              </li>
            </ul>
          </div>
      </header>
      
      <div className="content p-40">
        <h1>Все кроссовки</h1>

          <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/kyrie7.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Kyrie 7</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>219.00$</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/NikeAirMax270.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>219.00$</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/Lebron8Low.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Lebron XVIII Low</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>219.00$</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/PumaXAkaBokuFutureRider.png" alt="Sneakers" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>219.00$</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          </div>

        </div>

    </div>
  );
}

export default App;
