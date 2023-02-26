import React from 'react'
import { Link } from 'react-router-dom';
import {useCart} from '../hooks/useCart'


function HeaderComp (props){
  const {totalPrice} = useCart();
  return(
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt='logo'/>
          <div>
            <h3>OLZHAS SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={20} src="/img/cart.svg" alt='cart'/>
            <span>{totalPrice}.00₸</span>
          </li>

          <li className='cu-p mr-20'>
            <Link to="/favorites">
              <img width={18} height={18} src="/img/heart.svg" alt='favs'/>
            </Link>
          </li>

          <li className='cu-p mr-20'>
            <Link to="/orders">
            <img width={18} height={18} src="/img/user.svg" alt='user'/>
            </Link>
          </li>
            
          
        </ul>
      </div>
    </header>
  )
}

export default HeaderComp;
