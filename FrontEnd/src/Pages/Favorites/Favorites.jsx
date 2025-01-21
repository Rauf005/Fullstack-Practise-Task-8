import React from 'react'
import {Helmet} from "react-helmet"
import { useContext } from 'react'
import style from "./style.module.css"
import { favoriteContext } from '../../Context/FavoriteContext'
import { FaHeartBroken } from "react-icons/fa";


function Favorites() {
  let {favorite,setFavorite}=useContext(favoriteContext)

  function handleDeleteFavorite(id){
      let filteredFavorite=favorite.filter(product=>product._id!==id)
      setFavorite(filteredFavorite)
  }
  return (
    <div style={{minHeight:"500px"}}>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <div className={style.cards}>
              {favorite.map(product=>(
                <div key={product._id} className={style.card}>
                <div className={style.image}> <img src={product.image} alt="" /></div>
                  <div className={style.cardtext}>
                   <div className={style.aa}>
                   <span onClick={()=>handleDeleteFavorite(product._id)}  className={style.heart}> <FaHeartBroken/></span>
                   <h3>{product.name}</h3>  
                   </div>
                    <h3>{product.profession}</h3>
                    <p>{product.salary}$ per/month</p>
                  </div>
      
                </div>
              ))}
              </div>
    </div>
  )
}

export default Favorites