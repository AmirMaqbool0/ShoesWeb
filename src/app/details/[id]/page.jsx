'use client'

import { useEffect, useState } from "react";
import styles from './styles.module.css'
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Card from "@/components/Card/Card";
import { addtocart } from "@/provider/redux/addcard";
import { useDispatch, useSelector } from "react-redux";
const page = ({params}) => {
    const id =params.id;
    const [data ,setData] =useState()
    const detaildata = async() =>{
        const url = `https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com/product/${id}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9c8d880488mshff3839786bb1eebp1f4112jsn4ec74a02bd2c',
		'X-RapidAPI-Host': 'the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json()
    setData(result)
} catch (error) {
	console.error(error);
}
    }
    useEffect(()=>{
        detaildata()
    },[id])
    const dispatch =useDispatch()
   
  return (
    <div className={styles.detail_container}>
        <Navbar/>
        <div className={styles.row}>
        <div className={styles.detail_logo}>
            <img src={data?.image} alt="" />
        </div>  
        <div className={styles.detail_text_box}>
             <h1>{data?.title}</h1>
             <div className={styles.highligts}>
                <div className={styles.highligts_box}>
                    <span>{data?.brand}</span>
                </div>
                <div className={styles.highligts_box}>
                    <span>{data?.age_group}</span>
                </div>
                <div className={styles.highligts_box}>
                    <span>{data?.gender}</span>
                </div>
             </div>
             <div className={styles.details_discription}>
                <p>{data?.description}</p>
             </div>
             <div className={styles.price}>
                <span>Price:</span>
                <p>${data?.base_price}</p>
             </div>
             <div className={styles.detail_btn}>
                <button style={{background:'green'}}>Shop Now</button>
                <button style={{background:'rgb(249, 81, 81)'}} onClick={() =>dispatch(addtocart(data))}>Add Cart</button>
             </div>
        </div>  
        </div>
         <div className={styles.recomended}>
            <div className={styles.recomended_heading}>
                <span>Recommended</span>
            </div>
            <Card/>
         </div>
     
        <Footer/>
    </div>
  )
}

export default page