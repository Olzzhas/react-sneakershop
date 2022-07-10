import React from 'react'

function DrawerComp({onClickCart, items = []}) {
  return(
    <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина<img onClick={onClickCart} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove" /></h2>
          
          <div className="items">
            
            {items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
                <img className="mr-20" width={70} height={70} src={obj.imgUrl} alt="Sneakers"/>
                <div className="mr-20">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price}.00$</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
              </div>
            ))}


            {/* <div className="cartItem d-flex align-center mb-20">
              <img className="mr-20" width={70} height={70} src="/img/sneakers/kyrie7.jpg" alt="Sneakers"/>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Kyrie 7</p>
                <b>219.00$</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
            </div> */}

          </div>
          

          <div className="cartTotalBlock">
            <ul>
              <li >
                <span>Итого:</span>
                <div></div>
                <b>219.00$</b>
              </li>
              <li >
                <span>Налог 5%:</span>
                <div></div>
                <b>10.95$</b>
              </li>
            </ul>

            <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow"/></button>
          </div>
        </div>
      </div>
  )  
}

export default DrawerComp;
