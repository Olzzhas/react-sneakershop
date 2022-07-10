import React from 'react'
import styles from './Card.module.scss'

function CardComp({price, title, imgUrl, onPlus}){
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () =>{
    setIsAdded(!isAdded);
    if(!isAdded){
      onPlus({title, price, imgUrl});
    }else{
      
    }
  }

  console.log(isAdded);

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imgUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}.00 $</b>
        </div>
        
          <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="Plus"/>
        
      </div>
    </div>
  )
}

export default CardComp;