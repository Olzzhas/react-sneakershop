import React from 'react'


function HeaderComp (props){
  return(
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
            <li onClick={props.onClickCart} className="mr-30 cu-p">
              <img width={18} height={12} src="/img/cart.svg" />
              <span>1049.00$</span>
            </li>
            
            <li>
            <img width={18} height={18} src="/img/user.png" />
            </li>
          </ul>
        </div>
    </header>
  )
}

export default HeaderComp;
