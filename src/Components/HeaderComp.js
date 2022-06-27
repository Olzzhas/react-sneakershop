import React, { Component } from 'react'

export default class HeaderComp extends Component {
  render() {
    return (
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
    )
  }
}
