import React from 'react'
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss'
import { AppContext } from '../../App'

function CardComp({
  id, 
  price, 
  title, 
  imgUrl, 
  onPlus, 
  onFavorite, 
  isFavorited = false, 
  loading = false
}){
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(isFavorited);
  const obj = {id ,parentId :id, title, price, imgUrl};

  const onClickPlus = () =>{
    onPlus(obj);
  }

  const onClickFavorite = () =>{
    onFavorite({id ,title, price, imgUrl});
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      {loading ? 
      <ContentLoader 
        speed={2}
        width={150}
        height={265}
        viewBox="0 0 150 265"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
        <rect x="0" y="106" rx="5" ry="5" width="150" height="15" /> 
        <rect x="0" y="130" rx="5" ry="5" width="100" height="15" /> 
        <rect x="0" y="160" rx="5" ry="5" width="85" height="25" /> 
        <rect x="117" y="154" rx="5" ry="5" width="32" height="32" />
      </ContentLoader>
      :
      <>
        <div className={styles.favorite}>
          {onFavorite && <img onClick={onClickFavorite} src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.png"} alt="Unliked" />}
        </div>
        <img width={133} height={112} src={imgUrl} alt="Sneakers" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price}.00 ₸</b>
          </div>
          {onPlus && <img className={styles.plus} onClick={onClickPlus} src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="Plus"/>}
        </div>
      </>
      }
    </div>
  )
}

export default CardComp;