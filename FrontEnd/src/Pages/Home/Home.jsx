import React from 'react'
import style from "./style.module.css"
import { FaHeart } from "react-icons/fa";
import { useContext } from 'react';
import { favoriteContext } from '../../Context/FavoriteContext';
import { BsCheck2 } from "react-icons/bs";
import { useState,useEffect } from 'react';
import axios from "axios"
import { Helmet } from 'react-helmet';

function Home() {
    let {favorite,setFavorite}=useContext(favoriteContext)
    const [products,setProducts]=useState([])

    function getData(){
        axios.get("http://localhost:3000/teams")
        .then((res)=>{
            setProducts(res.data)
        })
    }
    useEffect(()=>{
        getData()
    },[])



    
function handleAddFavorite(product){
        let findFavorite= favorite.find(item=>item._id==product._id)
    
        if(findFavorite){
           alert("Bu mehsul wishlistde movcuddur")
        }else{
           setFavorite([...favorite,product])
           
        }
     }

    return (

        <div className={style.home}>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <section>
                <div className={style.hero}>
                    <div className={style.herotext}>
                        <h1>Banking Solutions</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod explicabo, eligendi in hic sequi.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className={style.shopping}>
                    <div className={style.shops}>
                        <div className={style.shop}>
                            <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/001-wallet.svg" alt="" />
                            <h2>Money Savings</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className={style.shop}>
                            <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/004-cart.svg" alt="" />
                            <h2>Online Shoppings</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className={style.shop}>
                            <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/006-credit-card.svg" alt="" />
                            <h2>
                                Credit / Debit Cards</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={style.amor}>
                    <div className={style.amorimg}>
                        <img src="https://preview.colorlib.com/theme/banker/images/about_2.jpg" alt="" />
                    </div>
                    <div className={style.amortext}>
                        <h2>Amortization Computation</h2>
                        <p>A small river named Duden flows by their place and <br /> supplies it with the necessary regelialia.</p>
                        <p><span><BsCheck2 /></span>Officia quaerat eaque neque</p>
                        <p><span><BsCheck2 /></span>Lorem ipsum dolor sit amet</p>
                        <p><span><BsCheck2 /></span>Consectetur adipisicing elit</p>

                        <form action="">
                            <input type="email" placeholder='Enter your email' />
                            <button type='submit'>Submit Email</button>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className={style.about}>
                    <h1>About Us</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</span>
                    <div className={style.abouttext}>
                        <div className={style.aboutimg}>
                            <img src="https://preview.colorlib.com/theme/banker/images/hero_1.jpg" alt="" />
                        </div>
                        <div className={style.text}>
                            <h2>We Solve Your Financial Problem</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={style.team}>
                    <h1>Meet Team</h1>
                    <b>A small river named Duden flows by their place and supplies it with the necessary regelialia.</b>
                    <div className={style.teamcards}>
                       { products.map(product=>(

<div className={style.teamcard}>
<img src={product.image} alt="" />
<h3>{product.name}</h3>
<p>{product.profession}</p>
<span>{product.salary}$ per/month</span>
<div onClick={()=>handleAddFavorite(product)}><FaHeart/></div>
</div>
                       ))

                       }
                        
                        
                    </div>
                </div>
            </section>
            <section>
                <div className={style.services}>
                    <h1>Our Services</h1>

                    <div className={style.shopping}>
                        <div className={style.shops}>
                            <div className={style.shop}>
                                <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/001-wallet.svg" alt="" />
                                <h2>Money Savings</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                            <div className={style.shop}>
                                <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/004-cart.svg" alt="" />
                                <h2>Online Shoppings</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                            <div className={style.shop}>
                                <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/006-credit-card.svg" alt="" />
                                <h2>
                                    Credit / Debit Cards</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                            <div className={style.shop}>
                                <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/003-notes.svg" alt="" />
                                <h2>
                                    Insurance Consulting</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                            <div className={style.shop}>
                                <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/004-cart.svg" alt="" />
                                <h2>
                                    Financial Investment</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                            <div className={style.shop}>
                                <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/005-megaphone.svg" alt="" />
                                <h2>
                                    Financial Management</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home





      