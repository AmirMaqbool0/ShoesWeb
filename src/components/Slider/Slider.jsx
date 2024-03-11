 'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import useFetch from '@/hooks/useFetch'

const Slider = () => {
    const [curState, setCurState] = useState(0)
    const [product, setProduct] = useState([])
    const { data } = useFetch('https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com/search?query=Adidas%20Forum')

    useEffect(() => {
        // Make sure data exists before updating product state
        if (data) {
            const threeproduct = data.slice(0, 3)
            setProduct(threeproduct)
        }
    }, [data])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (curState === 2) {
                setCurState(0)
            } else {
                setCurState(curState + 1)
            }
        }, 3000)
        
        return () => clearTimeout(timer)
    }, [curState])

    return (
        <div className={styles.home_banner}>
            <div className={styles.ome_banner_text}>
                <h1>Step into style</h1>
                <span>Discover the prefect pair for Every Occasion!</span>
                <button>Shop Now</button>
            </div>
            <div className={styles.slider}>
                <img src={product[curState]?.image} alt="" />
            </div>
        </div>
    )
}

export default Slider
