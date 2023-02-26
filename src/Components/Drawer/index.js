import React from 'react'
import axios from 'axios';

import Info from '../info';
import {useCart} from '../../hooks/useCart'

import styles from './Drawer.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function DrawerComp({onRemove, onClickCart, items = [], opened}) {

  const {cartItems, setCartItems, totalPrice} = useCart();

  const [isOrderComlete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () =>{
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://62c811690f32635590d09782.mockapi.io/orders', {
        items: cartItems,
      });

      setOrderId(data.id)
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://62c811690f32635590d09782.mockapi.io/cart/' + item.id)
        await delay(1000);
      }

    } catch (error) {
      alert("Ошибка при создании заказа :(")
    }
    setIsLoading(false)
  }
  return(
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
        <div className={styles.drawer}>
          <h2 className="d-flex justify-between mb-30">Корзина<img onClick={onClickCart} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove" /></h2>
          
          {
            items.length > 0 ? 
            <div className='d-flex flex-column flex'>
          <div className="items">
            {items.map((obj) => (
              <div key={obj.id} className="cartItem d-flex align-center mb-20">
                <img className="mr-20" width={70} height={70} src={obj.imgUrl} alt="Sneakers"/>
                <div className="mr-20">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price}.00₸</b>
                </div>
                <img className="removeBtn" onClick={() => onRemove(obj.id)} src="/img/btn-remove.svg" alt="remove" />
              </div>
            ))}
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li >
                <span>Итого:</span>
                <div></div>
                <b>{totalPrice}.00₸</b>
              </li>
              <li >
                <span>Налог 2%:</span>
                <div></div>
                <b>{totalPrice * 0.02}₸</b>
              </li>
            </ul>
            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow"/></button>
          </div>
          </div>
          :
          <Info 
            title={isOrderComlete ? "Заказ оформлен!" : "Корзина пустая" }
            description={isOrderComlete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, что бы сделать заказ"} 
            image={isOrderComlete ? "/img/complete-order.jpg" :"/img/empty-cart.png"}
          />
          }
        </div>
      </div>
  )  
}

export default DrawerComp;
