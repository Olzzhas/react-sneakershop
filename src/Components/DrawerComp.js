import React, { Component } from 'react'

export default class DrawerComp extends Component {
  render() {
    return (
        <div  className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина<img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove" /></h2>
          
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <img className="mr-20" width={70} height={70} src="/img/sneakers/kyrie7.jpg" alt="Sneakers"/>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Kyrie 7</p>
                <b>219.00$</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
            </div>
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
}
