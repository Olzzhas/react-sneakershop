import React, { Component } from 'react'

export default class CardComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
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
    )
  }
}
