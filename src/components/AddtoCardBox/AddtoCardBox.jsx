'use client'
import React from 'react'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'

const AddtoCardBox = () => {
    const cart =useSelector((state)=>state.addcart)
   console.log(cart.card)
  return (
    <div className={styles.cards}>
        {
            cart.card.map((item)=>{
                return(
                    <div className={styles.car_box}>
            <div className={styles.card_logo}>
                <img src={item?.image} alt="" />
    
            </div>
            <div className={styles.brand_name}>
             <span>{item?.title}</span>
             <p>With design elements inspired by the movement and motion of city life,</p>
             <button onClick={()=> router.push(`/details/${item?.id}`)}>Shop Now</button>
            </div>
        
        </div>
                )
            })
        }
      
    </div>
  )
}

export default AddtoCardBox